import { useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Paper, Grid } from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const BasicCard = (props) => {
  const { fullWidth, width, ...rest } = props;
  return (
    <Card sx={{ minWidth: fullWidth ? '100%' : width || 300 }} {...rest}>
      <CardContent>
        <Typography variant='h5'>JEE Mains</Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          19th Nov, 2021
        </Typography>
        <Box style={{ display: 'flex', marginTop: '1rem' }}>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Duration</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              3 hrs
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>No. of Participants</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              17,92,531
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Status</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              SCHEDULED
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Exam Timing</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              9:30AM - 12:30PM
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Exam Visibility</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              PUBLIC
            </Typography>
          </Box>
        </Box>
        <Button size='small' variant='text' style={{ padding: 0, marginTop: 5 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

const ExamsHosted = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ startDate: null, examVisibility: null, examStatus: null });

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
          <Box style={{ marginTop: '1rem', display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
            <Button size='small' onClick={(e) => hideFilters(e)}>
              Apply
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <TextInputField
          placeholder='Search Exams'
          fullWidth
          endIcon={<FilterListIcon />}
          endIconOnClick={() => setShowFilters(true)}
        />
        <Box style={{ marginTop: '1rem', height: `calc(100vh - 25rem)`, overflowY: 'auto' }}>
          {new Array(5).fill(0).map((exam, i) => (
            <BasicCard style={{ marginBottom: i === 4 ? '0.3rem' : '2rem' }} fullWidth />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ExamsHosted;
