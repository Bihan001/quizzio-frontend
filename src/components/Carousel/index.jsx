import React, { useState, useEffect } from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  Grid,
  Typography,
  Paper,
  Input,
  Box,
  Button,
  collapseClasses,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import useStyles from './styles';
import ExamBanner from 'components/exam-banner';
import { ClassNames } from '@emotion/react';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ data, type }) => {
  //Carousel States===========
  const [activeStep, setActiveStep] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  //==========================

  const theme = useTheme();
  const classes = useStyles();
  const Cards = {
    'exam-banner': data.map((examDetail, index) => (
      <ExamBanner key={index} data={examDetail} />
    )),
  };

  //useEffects============================
  useEffect(() => {
    setMaxSteps(data.length);
  }, [data]);
  //====================================

  //Carousel Config functions-==============
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  //========================================

  return (
    <>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className={classes.card}
      >
        {Cards[type]}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
};
export default Carousel;
