import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showConfirmation } from 'redux/slices/confirmation-dialog';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Scores = (props) => {
  const { examScores } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  if (!examScores) return null;

  return (
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
  );
};

export default Scores;
