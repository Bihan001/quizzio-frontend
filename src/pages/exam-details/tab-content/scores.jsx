
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showConfirmation } from 'redux/slices/confirmation-dialog';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Box, Typography, } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import commonStyle from './common-style';
import crown from './crown.png';


const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: "2rem",
    paddingBottom: "2rem",
    marginTop: "2.6rem",
    textAlign: "center",
  },
}));

const Scores = (props) => {

  const { examScoresDetails } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const classes2 = commonStyle();
  const history = useHistory();
  const theme = useTheme();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  console.log(examScoresDetails);

  if (!examScoresDetails) return null;

  return (
    <>
      <Typography className={classes2.heading}> SCORES </Typography>

      {/* <div>
        <button
          onClick={() =>
            dispatch(
              showConfirmation({
                title: 'Hello There',
                content: 'Are you sure you want to delete this exam?',
                primaryBtnText: 'Yes',
                secondaryBtnText: 'No',
                onPrimaryBtnClick: () => console.log('delete exam'),
                onSecondaryBtnClick: () => console.log('do nothing'),
              })
            )
          }
        >
          open modal
        </button>
        <button onClick={() => enqueueSnackbar('This is a snackbar', { variant: 'success' })}>open notification</button>
        <button onClick={() => enqueueSnackbar('This is a snackbar', { variant: 'warning' })}>open notification</button>
        <button onClick={() => enqueueSnackbar('This is a snackbar', { variant: 'error' })}>open notification</button>
      </div> */}


      <div className={classes.card} >
        <Paper elevation={2} style={{ width: "54%", margin: "auto" }} >
          <Card sx={{ cursor: 'pointer' }} >
            <CardContent>
              <Typography variant='h5' style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: '0.4px' }}>
                Your Score
              </Typography>

              <Box style={{ display: 'flex', marginTop: '1rem' }}>
                <Box style={{ marginRight: 'auto' }}>
                  <Typography variant='subtitle2'>COMPLETED AT </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    {new Date(examScoresDetails.finishTime).toDateString()} ,  {new Date(examScoresDetails.finishTime).toLocaleTimeString()}
                  </Typography>
                </Box>

                <Box style={{ marginRight: 'auto' }}>
                  <Typography variant='subtitle2'>RANK</Typography>
                  <Typography variant='subtitle2' style={{ fontWeight: "bold", color: theme.palette.primary.main, fontSize: "1.6rem" }} >
                    {examScoresDetails.rank !== null ? ` Position ${examScoresDetails.rank}` : '-'}
                  </Typography>
                </Box>

                <Box style={{ marginRight: 'auto' }}>
                  <Typography variant='subtitle2'> SCORE ACHIEVED </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    {examScoresDetails.totalScore !== null ? examScoresDetails.totalScore : '-'}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </div>


      <Typography variant='h5' style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: '0.4px', marginBottom: ' 1rem' }}>
        <img src={crown}
          style={{ width: "4rem", height: "4rem", transform: 'translate(0px , 8px)', marginRight: "1.4rem " }}
        />
        Top 5 Performers
      </Typography>


      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank </TableCell>
              <TableCell align="center">Name </TableCell>
              <TableCell align="center"> Achieved Score </TableCell>
              <TableCell align="center">Completed At&nbsp; </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {examScoresDetails.topPerformers && examScoresDetails.topPerformers.map((user) => (
              <TableRow
                key={user.rank}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">       {user.rank}        </TableCell>
                <TableCell align="center">  {user.name}</TableCell>
                <TableCell align="center">  {user.totalScore}</TableCell>
                <TableCell align="center">  {new Date(user.finishTime).toDateString()} ,  {new Date(user.finishTime).toLocaleTimeString()}  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
};

export default Scores;
