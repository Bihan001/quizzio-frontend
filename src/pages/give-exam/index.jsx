import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Paper, Grid } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom';
import { submitExamAnswers, startExam } from 'api/exam';
import Page1 from './page1';
import Page2 from './page2';
import RequestFullScreen from 'layouts/request-full-screen';
import { getUnitsFromDuration } from 'utilities/functions';

let timerInterval;

const GiveExam = () => {
  const location = useLocation();
  const history = useHistory();
  const examId = location.pathname.split('/')[2];
  const [examData, setExamData] = useState({});
  const [answer, setAnswer] = useState({});
  const [questionsStatus, setQuestionsStatus] = useState({});
  const [page, setPage] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const documentElement = document.documentElement;
  const [remainingTime, setRemainingTime] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  const questions = examData.questions || [];

  useEffect(() => {
    EnterFullScreen();
    documentElement.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) setIsFullScreen(true);
      else setIsFullScreen(false);
    });
    getExamData();
  }, []);


  useEffect(() => {
    if (remainingTime.days === null || remainingTime.hours === null || remainingTime.minutes === null || remainingTime.seconds === null) {
      return;
    }
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (remainingTime.seconds > 0) {
        setRemainingTime((t) => ({ ...t, seconds: t.seconds - 1 }));
      }
      if (remainingTime.seconds === 0) {
        if (remainingTime.minutes === 0) {
          if (remainingTime.hours === 0) {
            if (remainingTime.days === 0) {
              // Timer has finished
              clearInterval(timerInterval);
              handleEndExam();
            } else {
              setRemainingTime((t) => ({ ...t, days: t.days - 1, hours: 23, minutes: 59, seconds: 59 }));
            }
          } else {
            setRemainingTime((t) => ({ ...t, hours: t.hours - 1, minutes: 59, seconds: 59 }));
          }
        } else {
          setRemainingTime((t) => ({ ...t, minutes: t.minutes - 1, seconds: 59 }));
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);


  const EnterFullScreen = () => {
    documentElement
      .requestFullscreen()
      .then(() => console.log('entered full screen'))
      .catch((err) => console.error(err));
  };

  const ExitFullScreen = () => {
    document
      .exitFullscreen()
      .then(() => console.log('exited full screen'))
      .catch((err) => console.error(err));
  };

  const getExamData = async () => {
    try {
      const res = await startExam(examId);
      if (res) setExamData(res.data.data);
      else console.log('Error occured !', res);
    } catch (err) {
      console.error(err);
      history.push(`/exam/${examId}`);
    }
  };

  const getQuestionFromId = (id) => {
    return questions.find((q) => q.id === id);
  };

  const getQuestionType = (q) => {
    if (q) return q.type;
    return '';
  };

  const handleQAnswer = (qId, ans) => {
    setAnswer((a) => ({ ...a, [qId]: { type: getQuestionType(getQuestionFromId(qId)), answer: ans } }));
  };

  const handleQStatus = (qId, status) => {
    setQuestionsStatus((qs) => ({ ...qs, [qId]: status }));
  };

  const handleEndExam = async () => {
    const body = {
      examId,
      answers: answer,
      finishTime: Date.now(),
    };
    const res = await submitExamAnswers(body);
    console.log(res);
    ExitFullScreen();
    history.push(`/exam/${examId}`);
  };

  const handleTimerCountdown = () => {
    if (!examData) return;
    const endTime = new Date(+examData.startTime + examData.duration);
    const dd = getUnitsFromDuration(+endTime - Date.now());
    setRemainingTime({ days: dd.days, hours: dd.hours, minutes: dd.minutes, seconds: dd.seconds });
  };

  const handleViewQuestions = () => {
    setPage((p) => p + 1);
    handleTimerCountdown();
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {false && !isFullScreen ? (
        <RequestFullScreen EnterFullScreen={EnterFullScreen} />
      )

        :

        (
          <Container maxWidth='xl' style={{ padding: '5rem 0' }}>
            {page === 1 && <Page1 handlePageNext={handleViewQuestions} examData={examData} />}
            {page === 2 && (
              <Page2
                questions={questions}
                answerObj={answer}
                handleQAnswer={handleQAnswer}
                questionsStatus={questionsStatus}
                handleQStatus={handleQStatus}
                handleEndExam={handleEndExam}
                remainingTime={remainingTime}
              />
            )}
          </Container>
        )}
    </div>
  );
};

export default GiveExam;
