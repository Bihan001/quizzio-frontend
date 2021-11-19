import { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FileUploadInput from 'components/file-upload-input';
import TextEditor from 'components/text-editor';
import UploadFileIcon from '@mui/icons-material/UploadFile';
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
      <Grid container spacing={2} direction='row'>
        <Grid item lg={6}>
          <Grid container spacing={2} direction='row' alignItems='center'>
            <Grid item lg={6}>
              <TextInputField fullWidth label='Exam Name' placeholder='JEE Mains' required />
            </Grid>
            <Grid item lg={6}>
              <DatePicker fullWidth label='Start Date' required />
            </Grid>
            <Grid item lg={6}>
              <TimePicker fullWidth label='Start Time' required />
            </Grid>
            <Grid item lg={6}>
              <TextInputField fullWidth label='Exam Duration(mins)' placeholder='180' required />
            </Grid>
            <Grid item lg={6}>
              <FileUploadInput fullWidth label='Exam Banner' disabled />
            </Grid>
            <Grid item lg={6}>
              <DropdownField
                label='Exam Type'
                required
                fullWidth
                options={examTypes}
                value={examType}
                handler={(e) => setExamType(e.target.value)}
              />
            </Grid>
            <Grid item lg={6}>
              <FileUploadInput fullWidth label='Email List' disabled accept='.csv' uploadIcon={<UploadFileIcon />} />
            </Grid>
            <Grid item lg={6}>
              <MultiSelect
                options={tags}
                value={selectedTags}
                onChange={(e) => handleChange(e)}
                label='Tags'
                placeholder='Select tags'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Typography variant='p' component='p' style={{ marginBottom: '0.5rem' }}>
            Description
          </Typography>
          <TextEditor width='100%' height={295} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;
