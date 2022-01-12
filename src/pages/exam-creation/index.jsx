import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stepper, Step, StepButton } from '@mui/material';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import { createExam } from 'api/exam';
import { uploadImages } from 'api/utils';
// import { makeStyles, useTheme } from '@mui/styles';

const steps = ['Exam Details', 'Questions', 'Preview'];

const combineDateAndTime = (date, time) => {
  date = new Date(date);
  time = new Date(time);
  let timeString = time.getHours() + ':' + time.getMinutes() + ':00';
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // Jan is 0, dec is 11
  let day = date.getDate();
  let dateString = '' + year + '-' + month + '-' + day;
  let combined = new Date(dateString + ' ' + timeString);
  return combined;
};

const ExamCreation = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [examDetails, setExamDetails] = useState({
    name: '',
    description: '',
    isPrivate: false,
    startTime: null,
    endTime: null,
    image: '',
    type: '',
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
    try {
      const examData = JSON.parse(JSON.stringify(examDetails));
      examData.questions = questions;
      examData.duration = +new Date(examData.endTime) - +new Date(examData.startTime);
      examData.startTime = +new Date(examData.startTime);
      delete examData.endTime;
      examData.image = await handleUploadBannerImage();
      console.log(examData.image);
      const res = await createExam(examData);
      console.log('Exam data is : ', examData, ' res is : ', res);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUploadBannerImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', examDetails.image);
      const res = await uploadImages(formData);
      console.log(res);
      return res.data.data.urls[0].url;
    } catch (err) {
      console.error(err);
      return ' ';
    }
  };

  return (
    <Container maxWidth='xl'>
      <Stepper nonLinear alternativeLabel sx={{ margin: '4rem auto', marginBottom: '6rem', width: '500px' }} activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && <Page1 examDetails={examDetails} handleDetailsChange={handleDetailsChange} />}
      {activeStep === 1 && <Page2 questions={questions} handleQuestionsChange={handleQuestionsChange} />}
      {activeStep === 2 && <Page3 handleSubmitExamData={handleSubmitExamData} />}
    </Container>
  );
};

export default ExamCreation;
