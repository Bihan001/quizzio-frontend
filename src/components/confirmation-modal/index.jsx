import React from 'react';
import { DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import TickMarkGreen from '../../assets/icons/tickGreen.png';
import TickMarkRed from '../../assets/icons/tickRed.png';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  leftBtn: {
    // backgroundColor: palette.white,
    borderRadius: '4px',
    // border: `1px solid ${palette.black}`,
    outline: 'none',
    padding: '2px 20px',
    // fontSize: fontSizes.normal,
    // fontWeight: fontWeights.semibold,
  },
  rightBtn: {
    // backgroundColor: palette.danger,
    borderRadius: '4px',
    // border: `1px solid ${palette.white}`,
    outline: 'none',
    padding: '2px 20px',
    // color: palette.white,
    // fontSize: fontSizes.normal,
    // fontWeight: fontWeights.semibold,
  },
  conditionalButtons: {
    width: '2rem',
    height: '3rem',
    paddingTop: '1rem',
  },
}));

function ConfirmationModal({
  alertOpen,
  setAlertOpen,
  ID,
  text,
  pushLocation,
  noteOption,
  callbackFn,
  individualObject,
  purpose,
  setPurpose,
  buttonColor,
}) {
  const classes = useStyles();
  const history = useHistory();
  const { t, il8n } = useTranslation();
  const screenState = useSelector((state) => state.screenState);

  const handleClose = () => {
    setAlertOpen(false);
    setPurpose(null);
  };

  const handleAdd = () => {
    console.log(purpose);
    callbackFn(individualObject); //  CallBack function from the child to the parent component
    // AddDepartment(item);
    setAlertOpen(false);
    setPurpose(null);
  };

  return (
    <div style={{ position: 'absolute' }}>
      <Dialog
        open={alertOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div style={{ padding: '10px', width: screenState.isDesktopView ? '27rem' : '19rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {purpose === 'DELETE' ? (
              <img src={TickMarkRed} alt='confirmation' className={classes.conditionalButtons} />
            ) : (
              <img src={TickMarkGreen} alt='confirmation' className={classes.conditionalButtons} />
            )}

            <DialogTitle id='alert-dialog-title' style={{ textAlign: 'center', color: buttonColor, paddingBottom: '1rem' }}>
              Confirmation
            </DialogTitle>
          </div>

          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <APMText
                className='text'
                weight='bold'
                style={{
                  fontSize: '14px',
                  color: palette.black,
                  fontWeight: '500',
                }}
              >
                {/* Are you sure you want to add {text}: {ID} ? Data once
                                deleted cannot be restored. */}
                {text}
              </APMText>
            </DialogContentText>
          </DialogContent>

          <DialogActions style={{ display: 'flex', justifyContent: 'space-around' }}>
            <APMButton
              className={classes.leftBtn}
              variant='contained'
              size='small'
              style={{
                backgroundColor: 'white',
                border: '1px solid black',
              }}
              onClick={() => handleClose()}
            >
              <APMText size='normal' weight='semibold' style={{ color: 'black' }}>
                No
              </APMText>
            </APMButton>

            <APMButton
              className={classes.rightBtn}
              variant='contained'
              size='small'
              onClick={() => handleAdd()}
              style={{ backgroundColor: buttonColor }}
            >
              <APMText size='normal' weight='semibold'>
                Yes
              </APMText>
            </APMButton>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default ConfirmationModal;
