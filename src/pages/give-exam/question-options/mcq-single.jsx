
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const MCQSingle = (props) => {

  const { questionId, options, answer, handleQAnswer } = props;

  const handleOptionChange = (e) => {
    handleQAnswer(questionId, e.target.value);
  };

  return (
    <FormControl component='fieldset'>
      <RadioGroup value={answer} onChange={(e) => handleOptionChange(e)}>
        {options.map((o) => (
          <FormControlLabel value={o.id} control={<Radio checked={answer ? answer === '' + o.id : false} />} label={o.data} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default MCQSingle;
