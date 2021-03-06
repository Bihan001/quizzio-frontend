import { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

const MCQSingle = (props) => {
  const { questionId, options, userAnswer = '', correctAnswer } = props;
  const theme = useTheme();

  const getBackgroundColor = (optionId) => {
    if (optionId === correctAnswer[0]) return 'rgb(237, 247, 237)';
    if (optionId === userAnswer[0]) return '#ffccd5';
    return theme.palette.background.default;
  };

  return (
    <>
      <Typography variant='subtitle2' style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: '0.6px' }}>
        {userAnswer ? 'Your Answer' : 'Answer'}
      </Typography>

      <FormControl component='fieldset' style={{ width: '50%' }}>
        <RadioGroup value={userAnswer ? userAnswer[0] : null}>
          {options.map((o) => (
            <FormControlLabel
              value={+o.id}
              control={<Radio checked={userAnswer ? userAnswer[0] === +o.id : false} />}
              label={o.data}
              style={{ backgroundColor: getBackgroundColor(o.id), margin: '0.4rem 0', borderRadius: theme.shape.borderRadius }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MCQSingle;
