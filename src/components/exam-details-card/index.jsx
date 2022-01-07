
import { useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Paper, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';


const ExamDetailsCard = (props) => {

  const history = useHistory();
  const { fullWidth, width, data, cardDetails, ...rest } = props;


  // -----------------------------------------------------
  //               Time Manupulation 
  // -----------------------------------------------------
  let a = new Date(cardDetails.startTime);
  var StartTime = a.toDateString();
  var start = a.toLocaleTimeString();

  var addMins = new Date(a.getTime() + cardDetails.duration * 60000);
  var event = new Date(addMins);
  var end = event.toLocaleTimeString();


  const redirectToExamDetailsPage = () => {
    history.push(`/exam/${cardDetails.id}`);
  }


  return (
    <Card sx={{ minWidth: fullWidth ? '100%' : width || 300, cursor: 'pointer' }} {...rest}>
      <CardContent>
        <Typography variant='h5'>  {cardDetails.name !== null ? cardDetails.name : '-'} </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          {cardDetails.startTime !== null ? StartTime : '-'}
        </Typography>
        <Box style={{ display: 'flex', marginTop: '1rem' }}>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Duration</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              {cardDetails.duration !== null ? `${cardDetails.duration} mins` : '-'}
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>No. of Participants</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              {cardDetails.numberOfParticipants !== null ? cardDetails.numberOfParticipants : '-'}
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Status</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              SCHEDULED
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Exam Timing</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              {cardDetails.timing !== null ? `${start}  -  ${end}` : '-'}
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Exam Visibility</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              PUBLIC
            </Typography>
          </Box>
        </Box>

        <Button size='small' variant='text' style={{ padding: 0, marginTop: 5 }} onClick={() => redirectToExamDetailsPage()}>
          View Details
        </Button>

      </CardContent>
    </Card>
  );
};


export default ExamDetailsCard;
