
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Grid, Typography, Paper, Input, Box, Button } from '@mui/material';
import TextEditor from 'components/text-editor';
import TextInputField from 'components/text-input-field';
import DropdownField from 'components/dropdown-field';
import Bullet from '@mui/icons-material/FiberManualRecord';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';

let count = 0;

const actions = [
  {
    icon: <FileCopyIcon />,
    name: 'Copy',
    onClick: () => {
      alert(1);
    },
  },
  { icon: <SaveIcon />, name: 'Save', onClick: () => { } },
  { icon: <PrintIcon />, name: 'Print', onClick: () => { } },
  { icon: <ShareIcon />, name: 'Share', onClick: () => { } },
];

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  labelSmall: {
    fontSize: '1.4rem',
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

  const classes = useStyles();
  const theme = useTheme();

  const [questionType, setQuestionType] = useState('mcqSingle');
  const [optionArr, setOptionArr] = useState([]); //  [{} , {}]
  const [newOption, setNewOption] = useState('');

  const [correctOptionArr, setCorrectOptionArr] = useState([]); // [0,2,4]  arr of index
  const [newCorrectOption, setNewCorrectOption] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [currQuesNumber, setCurrQuesNumber] = useState(1);

  const AddNewOption = () => {
    if (!newOption || !newOption.trim()) return;
    setOptionArr([...optionArr, { id: count++, data: newOption }]);
    setNewOption('');
  };

  const addCorrectOption = () => {
    if (!newCorrectOption || !newCorrectOption.trim()) return;
    setCorrectOptionArr([...correctOptionArr, newCorrectOption]);
    setNewCorrectOption('');
  };

  const Options = [
    { value: 'mcqSingle', label: 'MCQ - 1 correct option' },
    { value: 'mcqMultiple', label: 'MCQ - More than 1 correct option' },
    { value: 'fillblank', label: '1 word answer' },
    { value: 'numerical', label: 'Numerical' },
    { value: 'matchitems', label: 'Match the following' },
  ];


  return (
    <Grid container spacing={5}>

      {/*   Editor Section  */}
      <Grid item lg={6}>
        <Grid container spacing={2} style={{ marginBottom: '1.5rem' }}>
          <Grid item lg={4}>
            <DropdownField
              label='Question Type'
              placeholder='question type'
              name='Question Type'
              required
              fullWidth
              options={Options}
              value={questionType}
              handler={(e) => setQuestionType(e.target.value)}
            />
          </Grid>
          <Grid item lg={4}>
            <TextInputField fullWidth label='Marks' placeholder='2' required />
          </Grid>
          <Grid item lg={4}>
            <TextInputField fullWidth label='Negative Marks' placeholder='1' required />
          </Grid>
        </Grid>
        <TextEditor width='100%' />
      </Grid>


      {/* Options Section  */}
      <Grid item lg={3}>
        {(questionType === 'mcqSingle' || questionType === 'mcqMultiple') && (
          <Box>
            <Box style={{}}>
              <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                Available Options :
              </Typography>
              <TextInputField
                label='New Option'
                labelClassName={classes.labelSmall}
                placeholder='Add new option'
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
                showActionBtn
                fullWidth
                actionBtnText='Add'
                actionOnClick={(e) => AddNewOption()}
              />
              <Box style={{ paddingLeft: '0.5rem', paddingTop: '0.5rem' }}>
                {optionArr &&
                  optionArr.length != 0 &&
                  optionArr.map((item, index) => (
                    <Box style={{ marginBottom: '0.2rem' }}>
                      {index + 1}) {item.data}
                    </Box>
                  ))}
              </Box>
            </Box>

            <Box style={{ marginTop: '1.5rem' }}>
              <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
                Correct Options :
              </Typography>
              <TextInputField
                label='Correct Option Id'
                placeholder='1'
                labelClassName={classes.labelSmall}
                name='newOption'
                type='number'
                value={newCorrectOption}
                onChange={(e) => setNewCorrectOption(e.target.value)}
                fullWidth
                showActionBtn
                actionBtnText='Add'
                actionOnClick={(e) => addCorrectOption()}
              />
              <Box style={{ paddingLeft: '0.5rem', paddingTop: '0.5rem' }}>
                {correctOptionArr &&
                  correctOptionArr.length != 0 &&
                  correctOptionArr.map((item, index) => (
                    <span style={{ marginRight: '1rem' }}>
                      <Bullet style={{ width: '1rem', height: '1rem' }} /> {item}
                    </span>
                  ))}
              </Box>
            </Box>
          </Box>
        )}
      </Grid>


      {/*   BUTTONS -- FOR QUESTION NUMBER  */}
      <Grid item lg={3} style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {new Array(4).fill(0).map((x, i) => (
            <Button className={classes.bubble} variant='contained'>
              {i + 1}
            </Button>
          ))}
          <Button className={classes.bubble} variant='contained'>
            <AddIcon />
          </Button>
        </div>
      </Grid>

    </Grid>
  );
};

export default Page2;
