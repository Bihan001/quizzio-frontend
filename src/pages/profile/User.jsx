import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import user from 'assets/icons/user.png';
import { Grid, Typography, Button, Box, TextField, Modal, Container, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import SimpleModal from './SimpleModal';
import TextInputField from 'components/text-input-field';
import { makeStyles, useTheme } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import './user.css';

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: '2.5rem',
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginTop: '1rem',
  },
  title: {
    fontWeight: '700',
    fontSize: '1.4rem',
  },
  subTitleKey: {
    fontSize: '1.5rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  subTitleValue: {
    fontSize: '1.5rem',
    fontWeight: 500,
    width: '100%',
  },
  labelSmall: {
    fontSize: '1.5rem',
  },
  profileImage: {
    borderRadius: '50%',
    width: 150,
    height: 150,
  },
}));

const User = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const [publishPhoto, setpublishPhoto] = useState(false);
  const [test, setTest] = useState(false);
  const [imageCropped, setimageCropped] = useState(false);
  const [image, setImage] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const [fileselect, setfileselect] = useState(null);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    // let selectedFile = e.target.files[0];
    // setfileselect(URL.createObjectURL(selectedFile));
    // if (selectedFile) {
    //   console.log('a');
    //   if (types.includes(selectedFile.type)) {
    //     setImage(selectedFile);
    //   } else {
    //     console.log('b');
    //     setImage(null);
    //   }
    // }
  };

  useEffect(() => {
    if (!fileselect) setTest(false);
    else setTest(!test);
  }, [fileselect]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Dialog open={open} handleClose={handleClose} maxWidth='xs'>
        <Grid container spacing={1} style={{ padding: '3rem' }}>
          <Grid item xs={12} lg={12} md={12}>
            <TextInputField label='Name' placeholder='name' required fullWidth labelClassName={classes.labelSmall} />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField label='Email' placeholder='email' required fullWidth labelClassName={classes.labelSmall} />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField label='Bio' placeholder='bio' required fullWidth labelClassName={classes.labelSmall} />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              label='Date Of Birth'
              type='date'
              placeholder='Dob'
              required
              fullWidth
              labelClassName={classes.labelSmall}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField
              label='Address'
              multiline
              row={2}
              placeholder='type here...'
              required
              fullWidth
              labelClassName={classes.labelSmall}
            />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <TextInputField label='Institute' placeholder='institute' fullWidth labelClassName={classes.labelSmall} />
          </Grid>

          <Grid item xs={12} lg={12} md={12}>
            <Typography align='left' variant='p' className={classes.labelSmall}>
              Password
              {true ? <span style={{ color: 'red' }}>*</span> : null}
            </Typography>

            <OutlinedInput
              label='Password'
              type={showPassword ? 'text' : 'password'}
              onChange={handleChange('password')}
              fullWidth
              endAdornment={
                <InputAdornment position='start'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    fullWidth
                    style={{ marginRight: -10 }}
                    edge='start'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginTop: '3rem',
              width: '100%',
            }}
          >
            <Box>
              <Button onClick={() => handleClose()} variant='outlined'>
                Cancel
              </Button>
            </Box>

            <Box>
              <Button variant='contained'>Save</Button>
            </Box>
          </Box>
        </Grid>
      </Dialog>
      {publishPhoto & (test === true) ? (
        <SimpleModal
          fileselect={fileselect}
          setfileselect={setfileselect}
          setimageCropped={setimageCropped}
          height={298}
          width={398}
          setTest={setTest}
        />
      ) : null}
      <Container maxWidth='xl'>
        <Grid container spacing={5} style={{ marginTop: '4rem' }}>
          <Grid item lg={3}>
            <Paper elevation={2} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box style={{ position: 'relative' }}>
                <img src={user} alt='' className={classes.profileImage} />
                <input
                  type='file'
                  id='input-file'
                  name='image'
                  accept='image/x-png,image/gif,image/jpeg,image/jpg'
                  onChange={handleChange}
                  style={{ visibility: 'hidden', position: 'absolute' }}
                />
                <label
                  fileselect={fileselect}
                  for='input-file'
                  style={{ position: 'absolute', bottom: 10, right: -5, cursor: 'pointer' }}
                >
                  <EditIcon color='primary' onClick={(e) => setpublishPhoto(true)} />
                </label>
              </Box>

              <Typography component='p' className={classes.name}>
                Niharika Dutta
              </Typography>
              <Typography component='p' className={classes.title}>
                niharikaDutta@gamil.com
              </Typography>

              <Grid container spacing={2} style={{ marginTop: '1rem' }} direction='row' alignItems='center'>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>Bio:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>Developer</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>Gender:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>Male</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>School/College:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>University of Engineering and Management, Kolkata</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>Phone:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>+91 9830844793</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>Date of Birth:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>14th March, 2001</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleKey}>Address:</Typography>
                </Grid>
                <Grid item md={6}>
                  <Typography className={classes.subTitleValue}>Bankra IAC Society</Typography>
                </Grid>
              </Grid>

              <Box sx={{ marginTop: '3rem' }}>
                <Button variant='outlined' onClick={() => handleOpen()}>
                  EDIT{' '}
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item lg={9}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default User;
