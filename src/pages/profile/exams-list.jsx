import { useState, useEffect } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Paper, Grid } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import ExamDetailsCard from 'components/exam-details-card';
import { getHostedExams, getGivenExams } from 'api/user';

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const ExamsList = (props) => {
  const { type } = props;
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    startDate: null,
    examVisibility: null,
    examStatus: null,
  });
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      let res;
      if (type === 'hosted') res = await getHostedExams();
      if (type === 'given') res = await getGivenExams();
      setExams(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFilterChange = (e) => setSelectedFilters((f) => ({ ...f, [e.target.name]: e.target.value }));

  const hideFilters = () => setShowFilters(false);
  return (
    <>
      <Dialog open={showFilters} handleClose={hideFilters} style={{ padding: '2rem' }} maxWidth='md'>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <DatePicker
                fullWidth
                label='Start Date'
                name='startDate'
                value={selectedFilters.startDate}
                onChange={(e) => handleFilterChange(e)}
              />
            </Grid>
            <Grid item md={6}>
              <DropdownField
                label='Exam Visibility'
                fullWidth
                options={examVisibilities}
                name='examVisibility'
                value={selectedFilters.examVisibility}
                handler={(e) => handleFilterChange(e)}
              />
            </Grid>
            <Grid item md={6}>
              <DropdownField
                label='Status'
                fullWidth
                options={examStatuses}
                name='examStatus'
                value={selectedFilters.examStatus}
                handler={(e) => handleFilterChange(e)}
              />
            </Grid>
          </Grid>
          <Box
            style={{
              marginTop: '1rem',
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <Button size='small' onClick={(e) => hideFilters(e)}>
              Apply
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <TextInputField placeholder='Search Exams' fullWidth endIcon={<FilterListIcon />} endIconOnClick={() => setShowFilters(true)} />
        <Box
          style={{
            marginTop: '1rem',
            height: `calc(100vh - 25rem)`,
            overflowY: 'auto',
          }}
        >
          {exams.map((exam, i) => (
            <ExamDetailsCard
              cardDetails={exam}
              style={{ marginBottom: i === 4 ? '0.3rem' : '2rem' }}
              data={{ name: 'asd', email: 'ankur' }}
              fullWidth
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ExamsList;
