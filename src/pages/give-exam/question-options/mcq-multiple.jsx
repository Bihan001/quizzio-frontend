
import { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';


const MCQMultiple = (props) => {

  const { questionId, options, answer, handleQAnswer } = props;
  const theme = useTheme();

  /*  const handleOptionChange = (e, optionId) => {
     let tmpAns = !answer ? [] : [...answer];
     optionId = +optionId;
     if (tmpAns.includes(optionId)) tmpAns = tmpAns.filter((o) => o !== optionId);
     else tmpAns.push(optionId);
     handleQAnswer(questionId, tmpAns);
   }; */

  return (
    <>
      <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: "0.6px" }} >
        Your Answer
      </Typography>

      <FormGroup>
        {options.map((o) => (
          <FormControlLabel
            control={<Checkbox checked={!!answer ? answer.includes(o.id) : false} /* onChange={(e) => handleOptionChange(e, o.id)} */ />}
            label={o.data}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default MCQMultiple;
