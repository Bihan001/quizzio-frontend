
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import commonStyle from './common-style';

const useStyles = makeStyles((theme) => ({

}));

const About = (props) => {

  const { content = '' } = props;
  const classes = useStyles();
  const classes2 = commonStyle();
  const theme = useTheme();

  return (
    <>
      <Typography className={classes2.heading} >  DESCRIPTION  </Typography>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default About;
