
import { useState, useEffect } from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Bullet from '@mui/icons-material/FiberManualRecord';
import TextInputField from 'components/text-input-field';

const useStyles = makeStyles((theme) => ({
  labelSmall: {
    fontSize: '1.4rem',
  },
}));

const MCQ = (props) => {

  const classes = useStyles();
  const { currentQuestion, setCurrentQuestion } = props;

  const [newOption, setNewOption] = useState('');
  const [newCorrectOption, setNewCorrectOption] = useState('');

  const addNewOption = () => {
    if (!newOption || !newOption.trim()) return;
    setCurrentQuestion((q) => ({ ...q, options: [...q.options, { id: Date.now(), data: newOption }] }));
    setNewOption('');
  };

  const addCorrectOption = () => {
    if (!newCorrectOption || !newCorrectOption.trim()) return;
    if (currentQuestion.type === 'mcq' && currentQuestion.correctOption?.length >= 1) return;
    setCurrentQuestion((q) => ({ ...q, correctOption: [...q.correctOption, newCorrectOption] }));
    setNewCorrectOption('');
  };

  return (
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
          actionOnClick={(e) => addNewOption()}
        />
        <Box style={{ paddingLeft: '0.5rem', paddingTop: '0.5rem' }}>
          {currentQuestion.options &&
            currentQuestion.options.length != 0 &&
            currentQuestion.options.map((item, index) => (
              <Box style={{ marginBottom: '0.2rem' }}>
                {index + 1}) {item.data}
              </Box>
            ))}
        </Box>
      </Box>

      <Box style={{ marginTop: '1.5rem' }}>
        <Typography variant='subtitle1' sx={{ fontWeight: '700' }}>
          {`Correct Option${currentQuestion.type === 'multipleOptions' ? 's' : ''}:`}
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
          {currentQuestion.correctOption &&
            currentQuestion.correctOption.length != 0 &&
            currentQuestion.correctOption.map((item, index) => (
              <span style={{ marginRight: '1rem' }}>
                <Bullet style={{ width: '1rem', height: '1rem' }} /> {item}
              </span>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MCQ;
