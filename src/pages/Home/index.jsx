import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Container } from '@mui/material';
import { Grid, Typography, Paper, Input, Box, Button } from '@mui/material';
import useStyles from './styles';
import { getAllUpcomingExams } from 'api/exam';
import Carousel from 'components/Carousel';
import ExamDetailsCard from 'components/ExamDetailsCard/ExamDetailsCard';
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

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const Home = () => {
  const [upcomingExams, setUpcomingExams] = useState([]);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(async () => {
    try {
      const res = await getAllUpcomingExams();
      setUpcomingExams(res.data.data);
      console.log('getAllUpcomingExams');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={classes.homePage}>
      <section className={classes.carouselSection}>
        <Carousel data={upcomingExams} type="exam-banner" />
      </section>
      <section className={classes.examListSection}>
        <div className={classes.sectionHeading}>Events and Contests</div>
        <ExamsListWithFilter />
      </section>
      <section className={classes.examListSection}>
        <div className={classes.sectionHeading}>More Exams</div>
        <ExamsListWithFilter />
      </section>
    </div>
  );
};
export default Home;

const ExamsListWithFilter = () => {
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
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '0px solid red',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            marginTop: '1rem',
          }}
        >
          {new Array(3).fill(0).map((exam, i) => (
            <ExamDetailsCard
              style={{
                marginBottom: i === 4 ? '0.3rem' : '2rem',
                width: '80rem',
                borderRadius: 0,
              }}
              data={{ name: 'asd', email: 'ankur' }}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
