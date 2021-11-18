
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Grid, Typography, Paper, Input, Box, Button, TextField } from '@mui/material';
import RichEditor from 'components/text-editor';
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
  root: {
    fontSize: '1.6rem',
    padding: '2rem',
  },
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  labelSmall: {
    fontSize: '1.4rem',
  },
}));


let count = 0;
let questionNumber = 1;

const ExamCreation = () => {

  const classes = useStyles();
  const history = useHistory();
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

  useEffect(() => {
    console.log('MODIFIED OPTION ARRAY = ', optionArr);
    console.log('MODIFIED ANSWER ARRAY = ', correctOptionArr);
  }, [optionArr, correctOptionArr]);


  const ButtonText = [
    {
      title: 'Upload CSV',
      onClickTrigger: () => { },
    },
    {
      title: 'Preview',
      onClickTrigger: () => { },
    },
    {
      title: 'Save',
      onClickTrigger: () => { },
    },
    {
      title: 'Discard',
      onClickTrigger: () => { },
    },
  ];

  const Options = [
    { value: 'mcqSingle', label: 'MCQ - 1 correct option' },
    { value: 'mcqMultiple', label: 'MCQ - More than 1 correct option' },
    { value: 'fillblank', label: '1 word answer' },
    { value: 'numerical', label: 'Numerical' },
    { value: 'matchitems', label: 'Match the following' },
  ];

  return (
    <div className={classes.root}>

      {/*  <Dialog open={openModal} handleClose={() => setOpenModal(false)}>
        <DialogTitle>New Modal here</DialogTitle>
        <DialogContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sed natus magnam, dolore eius placeat velit, ducimus
          deserunt, laboriosam atque blanditiis! Fuga consequatur culpa quam sunt ut, esse quis possimus velit voluptatum deserunt
          fugiat sapiente unde non, repellendus aspernatur. At, accusantium corporis repudiandae perferendis eum eaque.
          Necessitatibus sapiente sit voluptas officiis repellat error repellendus sunt facere libero, assumenda sed? Ratione quas
          commodi architecto nihil voluptatum, laudantium, unde iure atque fugiat vitae perspiciatis explicabo. Neque, cum nihil
          autem pariatur illum sequi, tempore, culpa dolores tenetur corrupti veniam deserunt vel porro. Aut, minus? Beatae
          officiis, praesentium incidunt asperiores magni assumenda ea non!
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog> */}

      {/* <Header title='Examination Edit/Creation' description='Create your exam here' /> */}

      {/* <SpeedDial actions={actions} /> */}
      {/* <SpeedDial grid cols={5} actions={actions} style={{ position: 'fixed', bottom: 16, right: 100 }} /> */}

      <Typography className={classes.heading} >Examination Edit/Creation</Typography>

      {/* <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Button variant='contained' onClick={(e) => setOpenModal((v) => !v)} style={{ marginRight: '2.3rem' }}>
          Open Test Modal
        </Button>

        {ButtonText.map((item, key) => {
          return (
            <>
              <Box sx={{ marginRight: '2.3rem' }}>
                <Button variant='contained'>{item.title}</Button>
              </Box>
            </>
          );
        })}
      </Box> */}


      {/* Section 1  */}
      <Grid container spacing={2} direction='row' style={{ marginTop: '0rem' }}>
        <Grid item>
          <TextInputField label='Exam Name' placeholder='JEE Mains' required />
        </Grid>
        <Grid item>
          <TextInputField label='Exam Time(mins)' placeholder='180' required />
        </Grid>
        <Grid item>
          <TextInputField label='Full Marks' placeholder='100' required />
        </Grid>
        <Grid item>
          <DatePicker label='Examination Date' required />
        </Grid>
        <Grid item>
          <TimePicker label='Examination Time' required />
        </Grid>
      </Grid>


      {/* Section 2  */}
      <div style={{ marginTop: '1.6rem', display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Paper elevation={2} style={{ padding: '1.5rem', /* overflowY: 'auto',  height: '54rem' */ }}>
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
            <RichEditor />

          </Paper>
        </div>



        <div style={{ marginTop: "1rem", justifyContent: "center" }}>
          {(questionType === 'mcqSingle' || questionType === 'mcqMultiple') && (
            <Box style={{ marginBottom: '6rem', /* width: 500 */ }}>
              <Box style={{ marginTop: '2rem' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: "700" }} >Available Options :</Typography>

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
                <Typography variant='subtitle2' sx={{ fontWeight: "700" }}>Correct Options :</Typography>
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
                    showActionBtn={true}
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


        <div style={{ marginTop: "2rem", paddingTop: "2rem" }}>

          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <Box sx={{ borderRadius: "50rem" }}>
                <Button variant='contained'>{currQuesNumber}</Button>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ borderRadius: "50rem" }}>
                <Button variant='contained'>{currQuesNumber + 1}</Button>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ borderRadius: "50rem" }}>
                <Button variant='contained'>{currQuesNumber + 1}</Button>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ borderRadius: "50rem" }}>
                <Button variant='contained'>{currQuesNumber + 1}</Button>
              </Box>
            </Grid>
          </Grid>

        </div>

      </div>
    </div>
  );
};

export default ExamCreation;
