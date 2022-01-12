
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showConfirmation } from 'redux/slices/confirmation-dialog';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Scores = (props) => {

  const { examScoresDetails } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  console.log(examScoresDetails);

  if (!examScoresDetails) return null;

  return (
    <>
      <div>
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
      </div>



      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank </TableCell>
              <TableCell align="right">Name </TableCell>
              <TableCell align="right">Total Score </TableCell>
              <TableCell align="right">Finish TIme&nbsp;(hrs) </TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {examScoresDetails.topPerformers && examScoresDetails.topPerformers.map((user) => (
              <TableRow
                key={user.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.totalScore}</TableCell>
                <TableCell align="right">{user.finishTime}</TableCell>
                {/* <TableCell align="right">{user.carbs}</TableCell> */}
                {/* <TableCell align="right">{user.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
};

export default Scores;
