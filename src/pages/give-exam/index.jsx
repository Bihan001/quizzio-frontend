import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Button, Paper, Grid } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom';
import { submitExamAnswers, startExam } from 'api/exam';
import Page1 from './page1';
import Page2 from './page2';
import RequestFullScreen from 'layouts/request-full-screen';

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

  const questions = examData.questions || [];

  useEffect(() => {
    EnterFullScreen();
    documentElement.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) setIsFullScreen(true);
      else setIsFullScreen(false);
    });
    getExamData();
  }, []);

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
    const res = await startExam(examId);
    if (res) setExamData(res.data.data);
    else console.log('Error occured !', res);
  };

  const handleQAnswer = (qId, ans) => {
    setAnswer((a) => ({ ...a, [qId]: ans }));
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

  const handlePageNext = () => setPage((p) => p + 1);

  const handlePagePrev = () => setPage((p) => p - 1);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {!isFullScreen ? (
        <RequestFullScreen EnterFullScreen={EnterFullScreen} />
      ) : (
        <Container maxWidth='xl' style={{ padding: '5rem 0' }}>
          {page === 1 && <Page1 handlePageNext={handlePageNext} examData={examData} />}
          {page === 2 && (
            <Page2
              questions={questions}
              answerObj={answer}
              handleQAnswer={handleQAnswer}
              questionsStatus={questionsStatus}
              handleQStatus={handleQStatus}
              handleEndExam={handleEndExam}
            />
          )}
        </Container>
      )}
    </div>
  );
};

export default GiveExam;
