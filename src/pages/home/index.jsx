import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container } from '@mui/material';
import { Box, Button } from '@mui/material';
import useStyles from './styles';
import { getExams } from 'api/exam';
import Carousel from 'components/carousel';
import announcementWhite from 'assets/icons/announcementWhite.png';
import announcementBlack from 'assets/icons/announcementBlack.png';
import { useSnackbar } from 'notistack';
import ExamsHorizontalScroll from './exams-horizontal-scroll-section';

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const Home = () => {
  const [fetchAllExam, setFetchAllExam] = useState([]);
  const theme = useTheme();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  // -------------------------------------
  //      FETCH ALL EXAMS DATA
  // -------------------------------------
  useEffect(async () => {
    try {
      const res = await getExams({});
      console.log('ALL EXAMS : ', res);
      setFetchAllExam(res.data.data);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  }, []);

  return (
    <div className={classes.homePage}>
      {/* -------------     CAROUSAL PART    -------------------- */}
      <section className={classes.carouselSection}>
        <Carousel data={fetchAllExam} type="exam-banner" />
      </section>

      {/* -------------     SECOND  PART    -------------------- */}
      <section className={classes.examListSection}>
        <div className={classes.sectionHeading}>Events and Contests</div>
        <ExamsHorizontalScroll allData={fetchAllExam} />
      </section>

      {/* -------------     THIRD PART    -------------------- */}
      <section className={classes.examListSection}>
        <div className={classes.sectionHeading}>More Exams</div>

        <ExamsHorizontalScroll allData={fetchAllExam} />
      </section>

      {/* -------------------   LAST ANNOUNCEMENT SECTION    ------------------- */}
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
