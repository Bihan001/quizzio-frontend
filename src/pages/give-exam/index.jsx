import { useState, useEffect } from 'react';
import { Container, Typography, Button, Paper, Grid } from '@mui/material';
import { useLocation, useHistory } from 'react-router-dom';
import { getExamMainData, submitExamAnswers } from 'api/exam';
import Page1 from './page1';
import Page2 from './page2';

const GiveExam = () => {
  const location = useLocation();
  const history = useHistory();
  const examId = location.pathname.split('/')[2];
  const [examData, setExamData] = useState({});
  const [answer, setAnswer] = useState({});
  const [questionsStatus, setQuestionsStatus] = useState({});
  const [page, setPage] = useState(1);

  const questions = examData.questions || [];

  useEffect(() => {
    getExamData();
  }, []);

  const getExamData = async () => {
    const res = await getExamMainData(examId, 'asdf');
    setExamData(res.data);
  };

  const handleQAnswer = (qId, ans) => {
    setAnswer((a) => ({ ...a, [qId]: ans }));
  };

  const handleQStatus = (qId, status) => {
    setQuestionsStatus((qs) => ({ ...qs, [qId]: status }));
  };

  const handleEndExam = async () => {
    const res = await submitExamAnswers(examId, 'sadf', answer);
    console.log(res);
    history.push(`/exam/${examId}`);
  };

  const handlePageNext = () => setPage((p) => p + 1);

  const handlePagePrev = () => setPage((p) => p - 1);

  return (
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
  );
};

export default GiveExam;
