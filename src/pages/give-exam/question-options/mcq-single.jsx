
import { useState, useEffect } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';


const MCQSingle = (props) => {

  const { questionId, options, answer, handleQAnswer } = props;
  const theme = useTheme();

  // const handleOptionChange = (e) => {
  //   handleQAnswer(questionId, [+e.target.value]);
  // };

  return (
    <>
      <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: "0.6px" }}  >
        Your Answer
      </Typography>

      <FormControl component='fieldset'>
        <RadioGroup value={answer ? answer[0] : null} /* onChange={(e) => handleOptionChange(e)} */>
          {options.map((o) => (
            <FormControlLabel value={+o.id} control={<Radio checked={answer ? answer[0] === +o.id : false} />} label={o.data} />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default MCQSingle;
