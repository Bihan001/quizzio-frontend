import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { TextField, Typography, Button } from '@mui/material';
import { Dialog, DialogContent, DialogActions, DialogTitle } from 'components/dialog';
import TickMarkGreen from 'assets/icons/tickGreen.png';
import TickMarkRed from 'assets/icons/tickRed.png';
import { hideConfirmation } from 'redux/slices/confirmation-dialog';

const useStyles = makeStyles((theme) => ({}));

function ConfirmationDialog(props) {
  const { ...rest } = props;
  const { open, title, content, primaryBtnText, onPrimaryBtnClick, secondaryBtnText, onSecondaryBtnClick } = useSelector(
    (state) => state.confirmationDialog
  );
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideConfirmation());
  };

  const handleSecondaryClick = () => {
    handleClose();
    onSecondaryBtnClick();
  };

  const handlePrimaryClick = () => {
    handleClose();
    onPrimaryBtnClick();
  };

  return (
    <Dialog {...rest} maxWidth='lg' open={open} handleClose={() => handleClose()}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant='p'>{content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => handleSecondaryClick()}>
          {secondaryBtnText}
        </Button>
        <Button onClick={() => handlePrimaryClick()}>{primaryBtnText}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
