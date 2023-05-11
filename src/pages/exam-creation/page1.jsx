import { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DateTimePicker from 'components/date-time-picker/date-time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FileUploadInput from 'components/file-upload-input';
import TextEditor from 'components/text-editor';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { getExamTags, getExamTypes } from 'api/exam';
import { csvToJSON } from 'utilities/functions';

const Page1 = (props) => {
  const { examDetails, handleDetailsChange } = props;
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [examTypes, setExamTypes] = useState([]);
  const [examType, setExamType] = useState('public');

  useEffect(() => {
    fetchTags();
    fetchExamTypes();
  }, []);

  const fetchTags = async () => {
    const res = await getExamTags();
    setTags(res.data.data);
  };

  const fetchExamTypes = async () => {
    const res = await getExamTypes();
    setExamTypes(res.data);
    if (res.data.length > 0) setExamType(res.data[0].value);
  };

  const handleBannerUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    handleDetailsChange('image', file);
  };

  const handleAllowedUsersUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const str = reader.result;
      const json = csvToJSON(str);
      const emails = json.map((x) => x.email);
      console.log(emails);
      handleDetailsChange('allowedUsers', emails);
      reader.abort();
    };
    reader.readAsText(file);
  };

  return (
    <>
      <Grid container spacing={5}>
        <Grid item lg={6}>
          <Grid container spacing={2} direction='row'>
            <Grid item lg={6}>
              <TextInputField
                fullWidth
                label='Exam Name'
                placeholder='JEE Mains'
                required
                name='name'
                value={examDetails.name}
                onChange={(e) => handleDetailsChange(e.target.name, e.target.value)}
              />
            </Grid>
            <Grid item lg={6}>
              <FileUploadInput
                fullWidth
                label='Exam Banner'
                disabled
                name='image'
                value={examDetails.image?.name}
                onChange={(e) => handleBannerUpload(e)}
              />
            </Grid>
            <Grid item lg={6}>
              {/* <DateTimePicker
                fullWidth
                label='Starts From'
                required
                name='startTime'
                value={examDetails.startTime}
                onChange={(newTime) => handleDetailsChange('startTime', newTime)}
              /> */}
              <TextInputField
                name='startTime'
                label='Starts From'
                fullWidth
                required
                value={examDetails.startTime}
                onChange={(e) => handleDetailsChange('startTime', e.target.value)}
              />
            </Grid>
            <Grid item lg={6}>
              {/* <DateTimePicker
                fullWidth
                label='Ends On'
                required
                name='endTime'
                value={examDetails.endTime}
                onChange={(newTime) => handleDetailsChange('endTime', newTime)}
              /> */}
              <TextInputField
                name='endTime'
                label='Ends On'
                fullWidth
                required
                value={examDetails.endTime}
                onChange={(e) => handleDetailsChange('endTime', e.target.value)}
              />
            </Grid>
            <Grid item lg={6}>
              <DropdownField
                label='Exam Type'
                required
                fullWidth
                options={examTypes}
                // handler={(e) => setExamType(e.target.value)}
                name='isPrivate'
                value={examDetails.isPrivate ? 'private' : 'public'}
                onChange={(e) => handleDetailsChange(e.target.name, e.target.value === 'private')}
              />
            </Grid>
            <Grid item lg={6}>
              <FileUploadInput
                fullWidth
                label='Email List'
                disabled
                uploadDisabled={!examDetails.isPrivate}
                accept='.csv'
                uploadIcon={<UploadFileIcon />}
                name='allowedUsers'
                value={examDetails.allowedUsers}
                onChange={(e) => handleAllowedUsersUpload(e)}
              />
            </Grid>
            <Grid item lg={6}>
              <MultiSelect
                options={tags}
                label='Tags'
                placeholder='Select tags'
                name='tags'
                value={examDetails.tags}
                onChange={(e) => handleDetailsChange(e.target.name, e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6}>
          <Typography variant='p' component='p' style={{ marginBottom: '0.5rem' }}>
            Description
          </Typography>
          <TextEditor width='100%' height={295} value={examDetails.description} onChange={(value) => handleDetailsChange('description', value)} />
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;
