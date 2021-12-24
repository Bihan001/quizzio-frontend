
import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container } from '@mui/material';
import { Grid, Typography, Paper, Box, Button } from '@mui/material';
import useStyles from './styles';
import { getAllUpcomingExams } from 'api/exam';
import Carousel from 'components/Carousel';
import ExamDetailsCard from 'components/ExamDetailsCard/ExamDetailsCard';
import announcementWhite from 'assets/icons/announcementWhite.png';
import announcementBlack from 'assets/icons/announcementBlack.png';

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
        <Container style={{ border: '0px solid blue', width: '100%' }}>
          <div className={classes.sectionHeading}>Events and Contests</div>
          <ExamsListWithFilter />
        </Container>
      </section>

      <section className={classes.examListSection}>
        <Container style={{ border: '0px solid blue', width: '100%' }}>
          <div className={classes.sectionHeading}>More Exams</div>
          <ExamsListWithFilter />
        </Container>
      </section>

      <section className={classes.announcementSection}>
        <Container className={classes.announcementContainer}>
          <div className={classes.sectionHeading}>Announcements</div>
          {new Array(3).fill(0).map((announcement) => (
            <div className={classes.announcementCard}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  className={classes.imgSize}
                  src={
                    theme.palette.mode == 'dark'
                      ? announcementWhite
                      : announcementBlack
                  }
                />{' '}
                <h1 style={{ marginRight: '4rem' }}>New Exam</h1>
                <div>{new Date().toDateString()}</div>
              </div>
              <div className={classes.announcementCardDesc}>
                Registrations for the 1st stages of the Indian Computing
                Olympiad 2022 - ZIO (Zonal Informatics Olympiad) & ZCO (Zonal
                Computing Olympiad) are ongoing.
              </div>
              <div className={classes.announcementCardButtonDiv}>
                <Button variant="outlined">Check Details</Button>
              </div>
            </div>
          ))}
        </Container>
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
            border: '0px solid green',
            width: '85%',
          }}
        >
          {new Array(3).fill(0).map((exam, i) => (
            <ExamDetailsCard
              style={{
                marginBottom: i === 4 ? '0.3rem' : '2rem',
                borderRadius: 0,
              }}
              data={{ name: 'asd', email: 'ankur' }}
              fullWidth
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
