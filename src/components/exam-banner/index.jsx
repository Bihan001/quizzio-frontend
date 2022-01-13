import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { Box } from '@mui/material';

const ExamBanner = ({ data }) => {
  const classes = useStyles();
  const [cardHover, setCardHover] = useState(false);

  return (
    <>
      <Box
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
        style={{ backgroundImage: `linear-gradient(rgba(28, 40, 51,.5), rgba(28, 40, 51,.5)),url(${data.image})`, color: 'white' }}
        className={classes.examBanner}
      >
        <div
          className={classes.show}
          style={{
            padding: '3rem',
            paddingTop: '20%',
            paddingBottom: '0rem',
            fontSize: '5rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div>{data.name}</div>
          <div className={data.ongoing ? classes.ongoing : classes.upcoming}>{data.ongoing ? 'ongoing' : 'upcoming'}</div>
        </div>

        <div
          style={{
            display: 'flex',
            margin: '4rem',
            fontWeight: 'bold',
            fontSize: '2rem',
          }}
          className={classes.show}
        >
          Registered : {data.numberOfParticipants}
        </div>

        <div className={classes.show} style={{ display: 'flex', margin: '3rem' }}>
          {data.tags.map((tag) => (
            <div style={{ margin: '1rem' }}>{tag}</div>
          ))}
        </div>
      </Box>
    </>
  );
};
export default ExamBanner;
