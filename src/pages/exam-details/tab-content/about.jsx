import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: '2.6rem',
    textAlign: 'center',
    fontWeight: '600',
    color: theme.palette.grey[600],
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const About = (props) => {
  const { content = '' } = props;
  const classes = useStyles();
  const theme = useTheme();

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default About;
