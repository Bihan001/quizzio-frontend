import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FileUploadInput from 'components/file-upload-input';
import TextEditor from 'components/text-editor';

const tags = [
  'Maths',
  'Physics',
  'Chemistry',
  'Exam',
  'Contest',
  'Computer Science',
  'Competitive Programming',
  'Dynamic Programming',
  'Graph Theory',
  'Literature',
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
    <>
      <Grid container spacing={2} direction='row' alignItems='center'>
        <Grid item lg={2}>
          <TextInputField fullWidth label='Exam Name' placeholder='JEE Mains' required />
        </Grid>
        <Grid item lg={2}>
          <DatePicker fullWidth label='Start Date' required />
        </Grid>
        <Grid item lg={2}>
          <TimePicker fullWidth label='Start Time' required />
        </Grid>
        <Grid item lg={2}>
          <TextInputField fullWidth label='Exam Duration(mins)' placeholder='180' required />
        </Grid>
        <Grid item lg={2}>
          <FileUploadInput fullWidth label='Exam Banner' disabled />
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
          <TextInputField fullWidth label='Email List' placeholder='0 emails added' required />
        </Grid>
        <Grid item lg={2}>
          <MultiSelect
            options={tags}
            value={selectedTags}
            onChange={(e) => handleChange(e)}
            label='Tags'
            placeholder='Select tags'
          />
        </Grid>
        <Grid item lg={12}>
          <Typography variant='p' component='p' style={{ marginBottom: '0.5rem' }}>
            Description
          </Typography>
          <TextEditor />
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;
