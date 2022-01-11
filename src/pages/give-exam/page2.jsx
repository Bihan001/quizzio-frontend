
import { useState, useEffect } from 'react';
import { Typography, Button, Paper, Grid } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import MCQSingle from './question-options/mcq-single';
import MCQMultiple from './question-options/mcq-multiple';
import FillBlanks from './question-options/fill-blanks';
import DomPurify from 'dompurify';

const qStatus = {
  notAttempted: 'not_attempted',
  marked: 'marked',
  review: 'review',
};

const useStyles = makeStyles((theme) => ({
  bubble: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    minWidth: 0,
    height: 50,
    margin: '1rem',
    borderRadius: '50%',
    background: theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[400],
    color: theme.palette.common.white,
  },
}));

const Page2 = (props) => {

  const {
    questions = [],
    answerObj = {},
    handleQAnswer = () => { },
    questionsStatus = {},
    handleQStatus = () => { },
    handleEndExam = () => { },
    remainingTime = {},
  } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const paperHeight = 'calc(100vh - 20rem)';
  const questionHeight = 'calc(100vh - 35rem)';
  const QuestionStatement = DomPurify.sanitize(currentQuestion.question);


  useEffect(() => {
    if (questions.length > 0) {
      console.log("questions :: ", questions);
      setCurrentQuestion(questions[0]);
    }
  }, [questions]);


  // --------------------------------------------
  // FUnction for the Question Number Bubble  (returns the color)
  // --------------------------------------------
  const getBubbleBackground = (qId) => {
    const status = questionsStatus[qId];
    if (!status || status === qStatus.notAttempted)
      return theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[400];
    if (status === qStatus.marked) return theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main;
    if (status === qStatus.review) return theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main;
  };


  return (
    <>
      {/* ====================     TIMER COMPONENT     ==================== */}
      <Paper elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '5rem' }}>
        <Typography variant='h5'>
          Time Remaining:{' '}
          {`${remainingTime.days} days ${remainingTime.hours} hours ${remainingTime.minutes} minutes ${remainingTime.seconds} seconds`}
        </Typography>
        <Button variant='contained' color='error' onClick={() => handleEndExam()}>
          End Exam
        </Button>
      </Paper>


      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} style={{ height: paperHeight, padding: '5rem' }}>
            <div style={{ display: 'flex', width: 'fit-content', marginLeft: 'auto' }}>
              <Typography variant='p' marginRight={'3rem'}>{`Marks: ${3}`}</Typography>
              <Typography variant='p'>{`Negative Marks: ${1}`}</Typography>
            </div>


            {/* ====================     MAIN QUESTION BODY    ==================== */}
            <div style={{ height: questionHeight, overflowY: 'auto' }}>
              <div dangerouslySetInnerHTML={{ __html: QuestionStatement }} />
              <div style={{ marginTop: '2rem' }}>
                {currentQuestion.type === 'multipleOptions' && (
                  <MCQMultiple
                    options={currentQuestion.options}
                    handleQAnswer={handleQAnswer}
                    questionId={currentQuestion.id}
                    answer={answerObj[currentQuestion.id]?.answer}
                  />
                )}

                {currentQuestion.type === 'mcq' && (
                  <MCQSingle
                    options={currentQuestion.options}
                    handleQAnswer={handleQAnswer}
                    questionId={currentQuestion.id}
                    answer={answerObj[currentQuestion.id]?.answer}
                  />
                )}

                {currentQuestion.type === 'fillInTheBlanks' && (
                  <FillBlanks
                    handleQAnswer={handleQAnswer}
                    questionId={currentQuestion.id}
                    answer={answerObj[currentQuestion.id]?.answer}
                  />
                )}
              </div>
            </div>


            {/* ====================     SEVERAL BUTTONS    ==================== */}
            <div style={{ display: 'flex', paddingTop: '1rem' }}>
              <Button
                variant='contained'
                color='primary'
                style={{ marginRight: '1rem' }}
                onClick={() => handleQStatus(currentQuestion.id, qStatus.marked)}
              >
                Mark
              </Button>
              <Button
                variant='contained'
                color='warning'
                style={{ marginRight: '1rem' }}
                onClick={() => handleQStatus(currentQuestion.id, qStatus.notAttempted)}
              >
                UnMark
              </Button>
              <Button
                variant='contained'
                color='secondary'
                style={{ marginRight: '1rem' }}
                onClick={() => handleQStatus(currentQuestion.id, qStatus.review)}
              >
                Review
              </Button>
              <Button
                variant='contained'
                color='info'
                style={{ marginRight: '1rem' }}
                onClick={() => {
                  handleQAnswer(currentQuestion.id, null);
                  handleQStatus(currentQuestion.id, qStatus.notAttempted);
                }}
              >
                Clear
              </Button>
            </div>

          </Paper>
        </Grid>


        <Grid item xs={12} md={4}>
          <Paper elevation={2} style={{ height: paperHeight, padding: '5rem', overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {questions.map((q, i) => (
                <Button
                  className={classes.bubble}
                  variant='contained'
                  // Set the current Ques from here
                  // Trigger its corresponding STATE 
                  // Render the JSX again.
                  onClick={() => setCurrentQuestion(q)}
                  style={{
                    background: getBubbleBackground(q.id),
                    boxShadow: currentQuestion.id === q.id ? '0 0 3px 3px rgba(0,0,0,0.4)' : 'none',
                  }}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Page2;
