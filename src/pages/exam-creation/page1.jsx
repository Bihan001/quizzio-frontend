import { useState } from 'react';
import { Grid } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FileUploadInput from 'components/file-upload-input';

const tags = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const examTypes = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const Page1 = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [examType, setExamType] = useState('public');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedTags(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Grid container spacing={2} direction='row' alignItems='center'>
      <Grid item lg={2}>
        <TextInputField label='Exam Name' placeholder='JEE Mains' required />
      </Grid>
      <Grid item lg={2}>
        <TextInputField label='Full Marks' placeholder='100' required />
      </Grid>
      <Grid item lg={2}>
        <DatePicker label='Start Date' required />
      </Grid>
      <Grid item lg={2}>
        <TimePicker label='Start Time' required />
      </Grid>
      <Grid item lg={2}>
        <TextInputField label='Exam Duration(mins)' placeholder='180' required />
      </Grid>
      <Grid item lg={2}>
        <DropdownField
          label='Exam Type'
          required
          fullWidth
          options={examTypes}
          value={examType}
          handler={(e) => setExamType(e.target.value)}
        />
      </Grid>
      <Grid item lg={2}>
        <FileUploadInput label='Exam Banner' disabled />
      </Grid>
      <Grid item>
        <MultiSelect options={tags} value={selectedTags} onChange={(e) => handleChange(e)} label='Tags' />
      </Grid>
    </Grid>
  );
};

export default Page1;
