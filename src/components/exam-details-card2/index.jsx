import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import useStyles from './styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useHistory } from 'react-router-dom';

const ExamDetailsCard2 = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { fullWidth, width, data, cardDetails, ...rest } = props;

  return (
    <Card
      sx={{ cursor: 'pointer', height: '47rem !important' }}
      {...rest}
      onClick={() => history.push(`/exam/${cardDetails.id}`)}
    >
      {cardDetails && (
        <CardContent
          style={{
            border: '0px solid blue',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
          }}
        >
          <Box
            style={{
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <img src={cardDetails.image} className={classes.img} />
          </Box>
          <Box style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
            <Typography variant="h6">
              {cardDetails.name !== null ? cardDetails.name : '-'}{' '}
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {cardDetails.tags.slice(0, 3).map((tag) => (
              <Tag tag={tag} />
            ))}
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              border: '0px solid red',
              height: 'fit-content',
              position: 'absolute',
              bottom: '2rem',
              right: '2rem',
            }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon style={{ marginRight: '.5rem' }} />
              {new Date(cardDetails.startTime).toDateString()}
            </Box>
          </Box>
        </CardContent>
      )}
    </Card>
  );
};
export default ExamDetailsCard2;

const Tag = ({ tag }) => {
  const classes = useStyles();
  return (
    <Box className={classes.tag}>
      <Typography variant="subtitle3">#{tag}</Typography>
    </Box>
  );
};
