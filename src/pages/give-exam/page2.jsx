import { Typography, Button, Paper, Grid } from '@mui/material';

const Page1 = () => {
  const paperHeight = 'calc(100vh - 20rem)';

  return (
    <>
      <Paper elevation={0} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '5rem' }}>
        <Typography variant='h5'>Time Remaining: </Typography>
        <Button variant='contained' color='error'>
          End Exam
        </Button>
      </Paper>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Paper elevation={2} style={{ height: paperHeight, padding: '5rem' }}>
            a
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} style={{ height: paperHeight, padding: '5rem' }}>
            a
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;
