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
    <>
      <section className={classes.carouselSection}>
        <Carousel data={upcomingExams} type="exam-banner" />
      </section>
    </>
  );
};
export default Home;
