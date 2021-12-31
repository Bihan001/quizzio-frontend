import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stepper, Step, StepButton } from '@mui/material';
import { submitNewExamData } from 'api/exam';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { createExam } from 'api/exam';
// import { makeStyles, useTheme } from '@mui/styles';

const steps = ['Exam Details', 'Questions', 'Preview'];

const ExamCreation = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [examDetails, setExamDetails] = useState({
    name: 'demoExam',
    description: ' ',
    isPrivate: false,
    startDate: new Date(),
    startTime: null,
    duration: null,
    image: ' ',
    type: ' ',
    allowedUsers: [],
    tags: [],
  });
  const [questions, setQuestions] = useState([]);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleDetailsChange = (name, value) => {
    setExamDetails((d) => ({ ...d, [name]: value }));
  };

  const handleQuestionsChange = (q) => {
    if (questions.find((qs) => qs.id === q.id)) {
      setQuestions((x) => x.map((qs) => (qs.id === q.id ? q : qs)));
    } else {
      setQuestions((qs) => [...qs, q]);
    }
  };

  const handleSubmitExamData = async () => {
    const examData = JSON.parse(JSON.stringify(examDetails));
    examData.questions = questions;
    examData['userId'] = '0257d1ed-cbeb-4db3-92c1-f325d05ae768';
    examData.startTime = +new Date(examData.startTime);
    const res = await createExam(examData);
    if (res) {
      console.log('Exam data is : ', examData, ' res is : ', res);
      history.push('/');
    } else console.log('error occured!');
  };

  return (
    <Container maxWidth="xl">
      <Stepper
        nonLinear
        alternativeLabel
        sx={{ margin: '4rem auto', marginBottom: '6rem', width: '500px' }}
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Page1
          examDetails={examDetails}
          handleDetailsChange={handleDetailsChange}
        />
      )}
      {activeStep === 1 && (
        <Page2
          questions={questions}
          handleQuestionsChange={handleQuestionsChange}
        />
      )}
      {activeStep === 2 && (
        <Page3 handleSubmitExamData={handleSubmitExamData} />
      )}
    </Container>
  );
};

export default ExamCreation;
