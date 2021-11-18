import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, Typography, Paper, Input, Box, Button, TextField, Container, Stepper, Step, StepButton } from '@mui/material';
import TextEditor from 'components/text-editor';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import DropdownField from 'components/dropdown-field';
import Bullet from '@mui/icons-material/FiberManualRecord';
import { Dialog, DialogTitle, DialogContent, DialogActions } from 'components/dialog';
import Header from 'components/header';
import SpeedDial from 'components/speed-dial';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

let count = 0;

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
  labelSmall: {
    fontSize: '1.4rem',
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <div style={{ paddingBottom: '1.5rem' }}>
          <DropdownField
            label='Question Type'
            placeholder='question type'
            name='Question Type'
            required
            fullWidth={true}
            options={Options}
            value={questionType}
            handler={(e) => setQuestionType(e.target.value)}
          />
        </div>

        {/* Editor  */}
        <TextEditor />
      </div>

      <div style={{ marginTop: '1rem', justifyContent: 'center' }}>
        {(questionType === 'mcqSingle' || questionType === 'mcqMultiple') && (
          <Box style={{ marginBottom: '6rem' /* width: 500 */ }}>
            <Box style={{ marginTop: '2rem' }}>
              <Typography variant='subtitle2' sx={{ fontWeight: '700' }}>
                Available Options :
              </Typography>

              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <TextInputField
                  label='New Option'
                  labelClassName={classes.labelSmall}
                  placeholder='type here...'
                  variant='standard'
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  showActionBtn
                  actionBtnText='Add'
                  actionOnClick={(e) => AddNewOption()}
                />
              </Box>
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
              <Typography variant='subtitle2' sx={{ fontWeight: '700' }}>
                Correct Options :
              </Typography>
              <Box style={{ display: 'flex', alignItems: 'flex-end' }}>
                <TextInputField
                  label='Correct Option Id'
                  placeholder='1'
                  labelClassName={classes.labelSmall}
                  name='newOption'
                  type='number'
                  variant='standard'
                  value={newCorrectOption}
                  onChange={(e) => setNewCorrectOption(e.target.value)}
                  showActionBtn
                  actionBtnText='Add'
                  actionOnClick={(e) => addCorrectOption()}
                />
              </Box>
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
      </div>

      <div style={{ marginTop: '2rem', paddingTop: '2rem' }}>
        <Grid container spacing={4}>
          {new Array(4).fill(0).map((x) => (
            <Grid item xs={6} md={3}>
              <Button style={{ borderRadius: '50%', padding: '2rem 0' }} variant='contained'>
                {currQuesNumber}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Page2;
