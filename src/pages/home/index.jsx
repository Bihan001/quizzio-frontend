
import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container } from '@mui/material';
import { Box, Button } from '@mui/material';
import useStyles from './styles';
import { getExams } from 'api/exam';
import Carousel from 'components/carousel';
import ExamDetailsCard from 'components/exam-details-card';
import announcementWhite from 'assets/icons/announcementWhite.png';
import announcementBlack from 'assets/icons/announcementBlack.png';

const examVisibilities = [
  { label: 'Public', value: 'public' },
  { label: 'Private', value: 'private' },
];

const examStatuses = ['Scheduled', 'Ongoing', 'Finished'];

const Home = () => {

  const [fetchAllExam, setFetchAllExam] = useState([]);
  const theme = useTheme();
  const classes = useStyles();


  // -------------------------------------
  //      FETCH ALL EXAMS DATA 
  // -------------------------------------
  useEffect(async () => {
    try {
      const res = await getExams({});
      console.log("ALL EXAMS : ", res);
      setFetchAllExam(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);


  return (
    <div className={classes.homePage}>

      {/* -------------     CAROUSAL PART    -------------------- */}
      <section className={classes.carouselSection}>
        <Carousel
          data={fetchAllExam}
          type='exam-banner'
        />
      </section>


      {/* -------------     SECOND  PART    -------------------- */}
      <section className={classes.examListSection}>
        <Container style={{ border: '0px solid blue', width: '100%' }}>
          <div className={classes.sectionHeading}>Events and Contests</div>
          <ExamsListWithFilter
            allData={fetchAllExam}
          />
        </Container>
      </section>


      {/* -------------     THIRD PART    -------------------- */}
      <section className={classes.examListSection}>
        <Container style={{ border: '0px solid blue', width: '100%' }}>
          <div className={classes.sectionHeading}>More Exams</div>
          <ExamsListWithFilter
            allData={fetchAllExam}
          />
        </Container>
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
                <img className={classes.imgSize} src={theme.palette.mode == 'dark' ? announcementWhite : announcementBlack} />{' '}
                <h1 style={{ marginRight: '4rem' }}>New Exam</h1>
                <div>{new Date().toDateString()}</div>
              </div>
              <div className={classes.announcementCardDesc}>
                Registrations for the 1st stages of the Indian Computing Olympiad 2022 - ZIO (Zonal Informatics Olympiad) & ZCO (Zonal
                Computing Olympiad) are ongoing.
              </div>
              <div className={classes.announcementCardButtonDiv}>
                <Button variant='outlined'>Check Details</Button>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
};
export default Home;




const ExamsListWithFilter = ({ allData }) => {

  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    startDate: null,
    examVisibility: null,
    examStatus: null,
  });

  const handleFilterChange = (e) => setSelectedFilters((f) => ({ ...f, [e.target.name]: e.target.value }));
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
          {/*  array.map(()  =>  {}) */}
          {allData && allData.map((Obj, i) => (
            <ExamDetailsCard
              style={{
                marginBottom: i === 4 ? '0.3rem' : '2rem',
                borderRadius: 0,
              }}
              data={{ name: 'asd', email: 'ankur' }}
              cardDetails={Obj}
              fullWidth
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
