
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Tab, Tabs, Button } from '@mui/material';
import { useTheme } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import About from './tab-content/about';
import useStyles from './styles';

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

const Exam_Details = (props) => {

  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const redirectToGiveExam = () => {
    history.push(`/exam/${1}/give`);
  };

  const TextPair = ({ heading, value }) => {
    return (
      <div style={{ padding: '0 2rem' }}>
        <Typography variant='subtitle2' color={theme.palette.primary.grey} style={{ textTransform: 'uppercase' }}>
          {heading}
        </Typography>
        <Typography variant='p'>{value}</Typography>
      </div>
    );
  };

  const JoinCardText = ({ heading, value }) => {
    return (
      <div style={{ display: 'flex', marginBottom: '1.3rem' }} >
        <Grid item md={4} >
          <Typography variant='subtitle2' style={{ textTransform: 'uppercase' }} > {heading}    :     </Typography>
        </Grid>

        <Grid item md={8} >
          <Typography style={{ fontSize: '1.5rem', fontWeight: "600", paddingLeft: '0.5rem' }} color={theme.palette.primary.contrastText}  >  {value}  </Typography>
        </Grid>
      </div>
    );
  };


  return (
    <>
      <section style={{ maxHeight: '45rem' }}>
        <img
          src='https://media-fastly.hackerearth.com/media/hackathon/bial-superapp-hackathon/images/7c1ad88a32-new_cover_2.png'
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
                Data Structures and Algorithms
              </Typography>
              <Typography variant='p'>By: {'Niharika Dutta'}</Typography>
            </div>

            <div style={{ display: 'flex' }}>
              <div className={classes.examInfo}>
                <TextPair heading='Starts On' value='Oct 27, 2021 03:00 PM IST' />
                <TextPair heading='Exam Mode' value='Online' />
                <TextPair heading='Ends On' value='Oct 27, 2021 06:00 PM IST' />
              </div>

              <div>
                <div className={classes.joinCard} >
                  <JoinCardText heading='opens at' value='Oct 27, 03:00 PM IST' />  <hr />
                  <JoinCardText heading='closes at' value='Oct 27, 03:00 PM IST' />  <hr />
                  <JoinCardText heading='duration' value='2 Hours 15 Mins' />  <hr />

                  <Button className={classes.JoinButton} size='large' variant='contained' onClick={() => redirectToGiveExam()}>
                    JOIN   {''}   EXAM
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div >


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
            <Tab className={classes.tabStyle} label='About' {...a11yProps(0)} />
            <Tab className={classes.tabStyle} label='Rules' {...a11yProps(1)} />
            <Tab className={classes.tabStyle} label='Teams' {...a11yProps(2)} />
            <Tab className={classes.tabStyle} label="FAQ's" {...a11yProps(3)} />
            <Tab className={classes.tabStyle} label='Discussions' {...a11yProps(4)} />
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
      </Container >
    </>
  );
};

export default Exam_Details;
