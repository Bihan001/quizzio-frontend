import { useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, Paper, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

const ExamDetailsCard = (props) => {
  const history = useHistory();
  const { fullWidth, width, data, ...rest } = props;

  const examDetailsRoute = `/exam/${data.id}`;

  const redirectToExamDetailsPage = () => {
    history.push(examDetailsRoute);
  };

  return (
    <Card onClick={() => redirectToExamDetailsPage()} sx={{ minWidth: fullWidth ? '100%' : width || 300, cursor: 'pointer' }} {...rest}>
      <CardContent>
        <Typography variant='h5'>JEE Mains</Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          19th Nov, 2021
        </Typography>
        <Box style={{ display: 'flex', marginTop: '1rem' }}>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Duration</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              3 hrs
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>No. of Participants</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              17,92,531
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
              9:30AM - 12:30PM
            </Typography>
          </Box>
          <Box style={{ marginRight: '2rem' }}>
            <Typography variant='subtitle2'>Exam Visibility</Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              PUBLIC
            </Typography>
          </Box>
        </Box>
        <Button size='small' variant='text' style={{ padding: 0, marginTop: 5 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};
export default ExamDetailsCard;
