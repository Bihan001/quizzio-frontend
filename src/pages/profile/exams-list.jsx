import { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import TextInputField from 'components/text-input-field';
import DatePicker from 'components/date-time-picker/date';
import TimePicker from 'components/date-time-picker/time';
import MultiSelect from 'components/multi-select-dropdown';
import DropdownField from 'components/dropdown-field';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
} from 'components/dialog';
import ExamDetailsCard from 'components/ExamDetailsCard/ExamDetailsCard';

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const ExamsHosted = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    startDate: null,
    examVisibility: null,
    examStatus: null,
  });

  const handleFilterChange = (e) =>
    setSelectedFilters((f) => ({ ...f, [e.target.name]: e.target.value }));

  const hideFilters = () => setShowFilters(false);
  return (
    <>
      <Dialog
        open={showFilters}
        handleClose={hideFilters}
        style={{ padding: '2rem' }}
        maxWidth="md"
      >
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <DatePicker
                fullWidth
                label="Start Date"
                name="startDate"
                value={selectedFilters.startDate}
                onChange={(e) => handleFilterChange(e)}
              />
            </Grid>
            <Grid item md={6}>
              <DropdownField
                label="Exam Visibility"
                fullWidth
                options={examVisibilities}
                name="examVisibility"
                value={selectedFilters.examVisibility}
                handler={(e) => handleFilterChange(e)}
              />
            </Grid>
            <Grid item md={6}>
              <DropdownField
                label="Status"
                fullWidth
                options={examStatuses}
                name="examStatus"
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
            <Button size="small" onClick={(e) => hideFilters(e)}>
              Apply
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      <Box style={{ display: 'flex', flexDirection: 'column' }}>
        <TextInputField
          placeholder="Search Exams"
          fullWidth
          endIcon={<FilterListIcon />}
          endIconOnClick={() => setShowFilters(true)}
        />
        <Box
          style={{
            marginTop: '1rem',
            height: `calc(100vh - 25rem)`,
            overflowY: 'auto',
          }}
        >
          {new Array(5).fill(0).map((exam, i) => (
            <ExamDetailsCard
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

export default ExamsHosted;
