import { useState, useEffect, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@mui/styles';
import { Typography, Button, Paper, Grid } from '@mui/material';
import { showConfirmation } from 'redux/slices/confirmation-dialog';
import MCQSingle from 'layouts/questionType-result/mcq-single';
import MCQMultiple from 'layouts/questionType-result/mcq-multiple';
import FillBlanks from 'layouts/questionType-result/fill-blanks';
import DomPurify from 'dompurify';
import '../../index.css';
import commonStyle from '../../common-style.js';

const useStyles = makeStyles((theme) => ({}));

const Page3 = (props) => {
  const { questions, handleSubmitExamData } = props;

  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const classes2 = commonStyle();

  const handleSubmit = () => {
    dispatch(
      showConfirmation({
        title: 'Create Exam',
        content: 'Are you sure you want to create this exam?',
        primaryBtnText: 'Yes',
        secondaryBtnText: 'No',
        onPrimaryBtnClick: handleSubmitExamData,
        // onSecondaryBtnClick: () => console.log('do nothing'),
      })
    );
  };

  console.log('All_Questions  ==> ', questions);

  return (
    <div>
      <Typography className={classes2.heading}> PREVIEW </Typography>

      {questions && questions.length > 0 && (
        <ol style={{ paddingLeft: '2rem' }}>
          {questions.map((eachQues, idx) => {
            return (
              <li key={idx}>
                {/* ====================     MAIN QUESTION BODY    ==================== */}
                <div style={{ marginTop: '2rem', overflowY: 'auto' }}>
                  <div
                    style={{ fontSize: '2rem !important' }}
                    dangerouslySetInnerHTML={{
                      __html: DomPurify.sanitize(eachQues.question),
                    }}
                  />

                  <Typography variant='body2' marginRight={'3rem'}>{`Marks: ${eachQues.marks}`}</Typography>
                  <Typography variant='body2'>{`Negative Marks: ${eachQues.negMarks}`} </Typography>

                  <div style={{ marginTop: '1rem' }}>
                    {eachQues.type === 'multipleOptions' && (
                      <MCQMultiple options={eachQues.options} questionId={eachQues.id} correctAnswer={eachQues.correctOption} />
                    )}

                    {eachQues.type === 'mcq' && (
                      <MCQSingle options={eachQues.options} correctAnswer={eachQues.correctOption} questionId={eachQues.id} />
                    )}

                    {eachQues.type === 'fillInTheBlanks' && <FillBlanks correctAnswer={eachQues.correctOption} questionId={eachQues.id} />}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' style={{ marginRight: '1rem' }} onClick={() => handleSubmit()}>
          Submit
        </Button>
        <Button variant='contained' color='info'>
          Print
        </Button>
      </div>
    </div>
  );
};

export default Page3;
