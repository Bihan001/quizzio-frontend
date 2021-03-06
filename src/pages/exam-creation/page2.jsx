import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Button } from '@mui/material';
import TextEditor from 'components/text-editor';
import TextInputField from 'components/text-input-field';
import DropdownField from 'components/dropdown-field';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import { getQuestionTypes } from 'api/exam';
import MCQ from './question-types/mcq';
import FillBlanks from './question-types/fill-blanks';

const actions = [
  {
    icon: <FileCopyIcon />,
    name: 'Copy',
    onClick: () => {
      alert(1);
    },
  },
  { icon: <SaveIcon />, name: 'Save', onClick: () => {} },
  { icon: <PrintIcon />, name: 'Print', onClick: () => {} },
  { icon: <ShareIcon />, name: 'Share', onClick: () => {} },
];

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
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
  const { questions, handleQuestionsChange } = props;

  const classes = useStyles();
  const theme = useTheme();

  console.log(questions);
  const [questionTypes, setQuestionTypes] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    fetchQuestionTypes();
    if (questions.length === 0) {
      addNewQuestion();
    } else {
      setCurrentQuestion(questions[0]);
    }
  }, []);

  useEffect(() => {
    if (currentQuestion && !isNaN(currentQuestion.id)) {
      handleQuestionsChange(currentQuestion);
    }
  }, [currentQuestion]);

  const fetchQuestionTypes = async () => {
    const res = await getQuestionTypes();
    setQuestionTypes(res.data.data);
  };

  const addNewQuestion = () => {
    setCurrentQuestion({
      id: questions.length,
      type: 'mcq',
      question: '',
      options: [],
      correctOption: [],
      marks: 2,
      negMarks: 1,
    });
  };

  return (
    <Grid container spacing={5}>
      {/*   EDITOR SECTION   */}
      {currentQuestion && (
        <Grid item lg={6}>
          <Grid container spacing={2} style={{ marginBottom: '1.5rem' }}>
            <Grid item lg={4}>
              <DropdownField
                label='Question Type'
                placeholder='question type'
                required
                fullWidth
                options={questionTypes}
                value={currentQuestion.type}
                onChange={(e) => setCurrentQuestion((q) => ({ ...q, type: e.target.value }))}
              />
            </Grid>

            <Grid item lg={4}>
              <TextInputField
                fullWidth
                type='number'
                label='Marks'
                placeholder={2}
                required
                value={currentQuestion.marks}
                onChange={(e) =>
                  setCurrentQuestion((q) => ({
                    ...q,
                    marks: +e.target.value < 0 ? 0 : +e.target.value,
                  }))
                }
              />
            </Grid>

            <Grid item lg={4}>
              <TextInputField
                fullWidth
                type='number'
                label='Negative Marks'
                placeholder={1}
                required
                value={currentQuestion.negMarks}
                onChange={(e) =>
                  setCurrentQuestion((q) => ({
                    ...q,
                    negMarks: +e.target.value < 0 ? 0 : +e.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>

          <TextEditor width='100%' value={currentQuestion.question} onChange={(value) => setCurrentQuestion((q) => ({ ...q, question: value }))} />
        </Grid>
      )}

      {/*  OPTION SECTION   */}
      {currentQuestion && (
        <Grid item lg={3}>
          {(currentQuestion.type === 'mcq' || currentQuestion.type === 'multipleOptions') && (
            <MCQ currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
          )}

          {currentQuestion.type === 'fillInTheBlanks' && <FillBlanks currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />}
        </Grid>
      )}

      {/*   BUTTONS -- FOR QUESTION NUMBER  */}
      <Grid item lg={3} style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {questions.map((ques, i) => (
            <Button
              className={classes.bubble}
              variant='contained'
              onClick={() => setCurrentQuestion(ques)} // Set the current ques acc to the Index Number
              style={{
                boxShadow: currentQuestion?.id === ques.id ? '0 0 3px 3px rgba(0,0,0,0.4)' : 'none',
              }}>
              {i + 1}
            </Button>
          ))}

          <Button className={classes.bubble} variant='contained' onClick={() => addNewQuestion()}>
            <AddIcon />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Page2;
