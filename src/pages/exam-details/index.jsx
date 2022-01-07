
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Tab, Tabs, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/styles';
import { useHistory, useLocation } from 'react-router-dom';
import About from './tab-content/about';
import useStyles from './styles';
import { getExamDetails } from 'api/exam';

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
  const [value, setValue] = useState(0);
  const examId = location.pathname.split('/')[2];
  const [examData, setExamData] = useState({});


  // -------------------------------------
  //      FETCH ALL EXAMS DATA 
  // -------------------------------------
  useEffect(async () => {
    try {
      const res = await getExamDetails(examId);
      setExamData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }, []);


  // -----------------------------------------------------
  //               Time Manupulation 
  // -----------------------------------------------------
  let a = new Date(examData.startTime);
  var StartTime = a.toDateString();
  var start = a.toLocaleTimeString();

  var addMins = new Date(a.getTime() + examData.duration * 60000);  // Converts to Minutes
  var event = new Date(addMins);
  var end = event.toLocaleTimeString();
  // -------------------------------------------------------


  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Typography style={{ fontSize: '1.5rem', fontWeight: '600', paddingLeft: '0.5rem' }}>{value}</Typography>
        </Grid>
      </div>
    );
  };

  return (
    <>
      <section style={{ maxHeight: '45rem' }}>
        <img
          src='https://media-fastly.hackerearth.com/media/hackathon/bial-superapp-hackathon/images/7c1ad88a32-new_cover_2.png'
          // src={examData.image}
          className={classes.banner}
        />
      </section>

      <Container maxWidth='xl'>
        <div style={{ display: 'flex' }}>
          <img
            src='https://media.istockphoto.com/photos/jolly-father-christmas-reading-letters-from-children-picture-id108353737?b=1&k=20&m=108353737&s=170667a&w=0&h=WhSAq3xVPEHRJvks0tFxun5dSHU0UbvUin60qOX-M00='
            className={classes.dp}
          />

          <div style={{ marginLeft: '3rem', width: '100%' }}>
            <div style={{ padding: '1rem 0' }}>
              <Typography variant='h4' fontSize='3rem'>
                {examData.name !== null ? examData.name : '-'}
              </Typography>
              <Typography variant='p'>By: {'Niharika Dutta'}</Typography>
            </div>

            <div style={{ display: 'flex' }}>
              <div className={classes.examInfo}>
                <TextPair heading='Starts On' value={`${StartTime} , ${start}`} />
                <TextPair heading='Exam Mode' value='Online' />
                <TextPair heading='Ends On' value='-' />
                <TextPair heading='Ends On' value='-' />
                <TextPair heading='Ends On' value='-' />
                <TextPair heading='Ends On' value='-' />
              </div>

              <Paper elevation={2} className={classes.joinCard}>
                <JoinCardText heading='opens at' value={` ${start}`} />
                <hr />
                <JoinCardText heading='closes at' value={` ${end}`} />
                <hr />
                <JoinCardText heading='duration' value={`${examData.duration} Mins`} />
                <hr />
                <Button className={classes.JoinButton} size='large' variant='contained' onClick={() => redirectToGiveExam()}>
                  JOIN EXAM
                </Button>
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
            <Tab label='About' {...a11yProps(0)} />
            <Tab label='Rules' {...a11yProps(1)} />
            <Tab label='Teams' {...a11yProps(2)} />
            <Tab label="FAQ's" {...a11yProps(3)} />
            <Tab label='Discussions' {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <About />
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
