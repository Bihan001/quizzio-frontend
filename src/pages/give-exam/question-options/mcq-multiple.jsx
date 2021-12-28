import { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const MCQMultiple = (props) => {
  const { questionId, options, answer, handleQAnswer } = props;

  const handleOptionChange = (e, optionId) => {
    let tmpAns = !answer ? [] : [...answer];
    if (tmpAns.includes(optionId)) {
      tmpAns = tmpAns.filter((o) => o !== optionId);
    } else {
      tmpAns.push(optionId);
    }
    handleQAnswer(questionId, tmpAns);
  };

  return (
    <FormGroup>
      {options.map((o) => (
        <FormControlLabel
          control={<Checkbox checked={!!answer ? answer.includes(o.id) : false} onChange={(e) => handleOptionChange(e, o.id)} />}
          label={o.data}
        />
      ))}
    </FormGroup>
  );
};

export default MCQMultiple;
