
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Tab, Tabs, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import About from './tab-content/about';
import useStyles from './styles';
import { getExamDetails, registerInExam, getUserExamRegisterStatus } from 'api/exam';
import DomPurify from 'dompurify';

let timerInterval;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
  };
};

const Exam_Details = () => {

  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState(0);
  const examId = location.pathname.split('/')[2];
  const [examData, setExamData] = useState({});
  const [registerStatus, setRegisterStatus] = useState(false);
  const cleanDescription = DomPurify.sanitize(examData.description);

  // Timer states
  const [remainingTime, setRemainingTime] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  useEffect(() => {
    if (!examData?.startTime) return;
    const duration = new Date(examData.startTime) - Date.now();
    if (duration < 0) {
      return setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
    const dd = getUnitsFromDuration(duration);
    console.log(duration, dd);
    setRemainingTime({ days: dd.days, hours: dd.hours, minutes: dd.minutes, seconds: dd.seconds });
  }, [examData.startTime]);


  useEffect(() => {
    if (remainingTime.days === null || remainingTime.hours === null || remainingTime.minutes === null || remainingTime.seconds === null) {
      return;
    }

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (remainingTime.seconds > 0) {
        setRemainingTime((t) => ({ ...t, seconds: t.seconds - 1 }));
      }
      if (remainingTime.seconds === 0) {
        if (remainingTime.minutes === 0) {
          if (remainingTime.hours === 0) {
            if (remainingTime.days === 0) {
              // Timer has finished
              clearInterval(timerInterval);
            } else {
              setRemainingTime((t) => ({ ...t, days: t.days - 1, hours: 23, minutes: 59, seconds: 59 }));
            }
          } else {
            setRemainingTime((t) => ({ ...t, hours: t.hours - 1, minutes: 59, seconds: 59 }));
          }
        } else {
          setRemainingTime((t) => ({ ...t, minutes: t.minutes - 1, seconds: 59 }));
        }
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);


  // -------------------------------------
  //      FETCH ALL EXAMS DATA
  // -------------------------------------
  useEffect(async () => {
    fetchExamDetails();
    checkRegisterStatus();
  }, []);

  const getUnitsFromDuration = (duration) => {
    duration = duration / 1000;
    const days = Math.floor(duration / 86400);
    duration -= days * 86400;
    const hours = Math.floor(duration / 3600) % 24;
    duration -= hours * 3600;
    const minutes = Math.floor(duration / 60) % 60;
    duration -= minutes * 60;
    const seconds = Math.floor(duration % 60);
    return { days, hours, minutes, seconds };
  };

  const checkRegisterStatus = async () => {
    try {
      const res = await getUserExamRegisterStatus(examId);
      setRegisterStatus(!!res.data.data.registered);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchExamDetails = async () => {
    try {
      const res = await getExamDetails(examId);
      setExamData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const registerUserInExam = async () => {
    try {
      const res = await registerInExam({ examId });
      if (res.status === 200) {
        setRegisterStatus(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const redirectToGiveExam = () => {
    history.push(`/exam/${examId}/give`);
  };

  const TextPair = ({ heading, value }) => {
    return (
      <div>
        <Typography variant='subtitle2' color={theme.palette.primary.grey} style={{ textTransform: 'uppercase' }}>
          {heading}
        </Typography>
        <Typography variant='p'>{value}</Typography>
      </div>
    );
  };

  const JoinCardText = ({ heading, value }) => {
    return (
      <div style={{ display: 'flex', marginBottom: '1.3rem' }}>
        <Grid item md={4}>
          <Typography variant='subtitle2' style={{ textTransform: 'uppercase' }}>
            {heading}:
          </Typography>
        </Grid>
        <Grid item md={8}>
          <Typography style={{ fontSize: '1.5rem', fontWeight: '600' }}>{value}</Typography>
        </Grid>
      </div>
    );
  };

  const getTypography = (text = '') => {
    return (
      <Typography component='p' variant='p' className={classes.joinText}>
        {text}
      </Typography>
    );
  };

  const getButton = (text = '', type = '') => {
    return (
      <Button
        className={classes.joinButton}
        size='large'
        variant='contained'
        color='info'
        onClick={() => (type === 'register' ? registerUserInExam() : type === 'start' ? redirectToGiveExam() : null)}
      >
        {text}
      </Button>
    );
  };

  const JoinRegisterSection = () => {
    if (!examData.startTime) return null;
    if (remainingTime.days === null || remainingTime.hours === null || remainingTime.minutes === null || remainingTime.seconds === null)
      return null;
    const startTime = new Date(examData.startTime);
    const endTime = new Date(+startTime + examData.duration);
    const remain =
      remainingTime.days * 86400000 - remainingTime.hours * 3600000 - remainingTime.minutes * 60000 - remainingTime.seconds * 1000;
    // If days,hours,minutes,seconds are zeros, then remain = 0, and startTime - remain = 0, so currentTime should be Date.now()
    const currentTime = remain === 0 ? Date.now() : +startTime - remain;
    if (currentTime < startTime) {
      // before exam
      if (!user) {
        return (
          <>
            {getTypography('Login to register for exam')}
            <CountdownTimer />
          </>
        );
      } else {
        return (
          <>
            {getButton('Register', 'register')}
            <CountdownTimer />
          </>
        );
      }
    } else if (currentTime >= startTime && currentTime < endTime) {
      if (!user) {
        return getTypography('Login to enter exam');
      }
      // user has not registered
      else if (!registerStatus) {
        return getTypography('You have not registered for this exam');
      } else {
        return getButton('Enter Exam', 'start');
      }
    } else if (currentTime >= endTime) {
      // after exam
      return getTypography('Exam has ended');
    }
  };

  const CountdownTimer = () => {
    return (
      <Typography component='p' variant='p' className={classes.joinText}>
        {`${remainingTime.days} days ${remainingTime.hours} hours ${remainingTime.minutes} minutes ${remainingTime.seconds} seconds`}
      </Typography>
    );
  };

  const getExamDurationFormatted = () => {
    if (!examData.duration) return null;
    const { days, hours, minutes } = getUnitsFromDuration(examData.duration);
    let duration = '';
    if (days > 0) {
      duration += days === 1 ? `${days} day ` : `${days} days `;
    }
    if (hours > 0) {
      duration += hours === 1 ? `${hours} hour ` : `${hours} hours `;
    }
    if (minutes > 0) {
      duration += minutes === 1 ? `${minutes} minute ` : `${minutes} minutes `;
    }
    return duration;
  };



  return (
    <>
      {/* -----------     Banner    ----------- */}
      <section style={{ maxHeight: '45rem' }}>
        <img
          src='https://media-fastly.hackerearth.com/media/hackathon/bial-superapp-hackathon/images/7c1ad88a32-new_cover_2.png'
          // src={examData.image}
          className={classes.banner}
        />
      </section>


      <Container maxWidth='xl'>
        <div style={{ display: 'flex' }}>

          <img src={examData.user?.image} className={classes.dp} />

          <div style={{ marginLeft: '3rem', width: '100%' }}>
            <div style={{ padding: '1rem auto 2.4rem auto' }}>
              <Typography variant='h4' fontSize='3rem'>
                {examData.name !== null ? examData.name : '-'}
              </Typography>
              <Typography variant='p'>By:  {examData.user?.name}</Typography>
            </div>


            <div style={{ display: 'flex' }}>
              {/*-------------------------------------------------- */}
              {/*                INFORMATION                        */}
              {/*-------------------------------------------------- */}
              <div className={classes.examInfo}>
                <TextPair
                  heading='Exam Type'
                  value={examData.isPrivate ? 'Private' : 'Public'}
                />
                <TextPair
                  heading='starts on'
                  value={new Date(examData.startTime).toDateString() || '-'}
                />
                <TextPair
                  heading='Number of Participants'
                  value={isNaN(examData.numberOfParticipants) ? '-' : examData.numberOfParticipants}
                />
              </div>


              {/*-------------------------------------------------- */}
              {/*             EXAM  TIME  DISPLAY  CARD             */}
              {/*-------------------------------------------------- */}
              <Paper elevation={2} className={classes.joinCard}>
                <JoinCardText heading='opens at' value={new Date(examData.startTime).toLocaleString() || '-'} />
                <hr />
                <JoinCardText heading='closes at' value={new Date(examData.startTime + examData.duration).toLocaleString() || '-'} />
                <hr />
                <JoinCardText heading='duration' value={`${getExamDurationFormatted()}`} />
                <hr />

                {/* Timer Part */}
                <JoinRegisterSection />
              </Paper>

            </div>
          </div>
        </div>



        {/*   SECTION - 2  */}
        {/*  Side Vertical Tabs  */}
        <div className={classes.root}>
          <Tabs
            orientation='vertical'
            variant='scrollable'
            value={value}
            onChange={handleChange}
            aria-label='Vertical tabs example'
            className={classes.tabVerticalLine}
          >
            <Tab label='Description' {...a11yProps(0)} />
            <Tab label='Result' {...a11yProps(1)} />
            <Tab label='Teams' {...a11yProps(2)} />
            <Tab label="FAQ's" {...a11yProps(3)} />
            <Tab label='Discussions' {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <About content={cleanDescription} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Rules
          </TabPanel>
          <TabPanel value={value} index={2}>
            Teams
          </TabPanel>
          <TabPanel value={value} index={3}>
            FAQ's
          </TabPanel>
          <TabPanel value={value} index={4}>
            Discussions
          </TabPanel>
        </div>
      </Container>
    </>
  );
};

export default Exam_Details;
