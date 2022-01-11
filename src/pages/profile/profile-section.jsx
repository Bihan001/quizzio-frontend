import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Typography, Button, Box, TextField, Modal, Container, Paper, Tabs, Tab } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { DialogActions, DialogContent, DialogTitle, Dialog } from 'components/dialog';
import TextInputField from 'components/text-input-field';
import CropImageDialog from './crop-image';
import EditIcon from '@mui/icons-material/Edit';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import UserIcon from 'assets/icons/user.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const Profile = () => {
  const classes = useStyles();

  const { user } = useSelector((state) => state.auth);

  const [imageCropped, setimageCropped] = useState(null);
  const [fileselect, setfileselect] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (fileselect) setImageDialogOpen(true);
  }, [fileselect]);

  const handleClickShowPassword = () => {
    setShowPassword((s) => !s);
  };

  const handleEditDialogOpen = () => setEditDialogOpen(true);
  const handleEditDialogClose = () => setEditDialogOpen(false);

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    setfileselect(URL.createObjectURL(selectedFile));
  };

  return (
    <>
      {/* -----------------------------        EDIT PROFILE MODAL PART         ---------------------------------------------- */}
      <Dialog open={editDialogOpen} handleClose={handleEditDialogClose} maxWidth='xs' style={{ padding: '3rem' }}>

        <DialogTitle style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold' }} > Edit Profile </DialogTitle>

        <DialogContent>
          <Grid container spacing={1}>
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
              <TextInputField label='Date Of Birth' type='date' placeholder='Dob' required fullWidth labelClassName={classes.labelSmall} />
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
              <TextInputField
                type={showPassword ? 'text' : 'password'}
                label='Password'
                placeholder='New password'
                fullWidth
                labelClassName={classes.labelSmall}
                endIcon={showPassword ? <Visibility /> : <VisibilityOff />}
                endIconOnClick={handleClickShowPassword}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              md={12}
              style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-evenly', width: '100%' }}
            >
              <Button onClick={() => handleEditDialogClose()} variant='outlined' color='error' >
                Cancel
              </Button>
              <Button variant='contained'>Save</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* -------------------------------------------------------------------------------------- */}


      <CropImageDialog
        open={imageDialogOpen}
        setOpen={setImageDialogOpen}
        fileselect={fileselect}
        setfileselect={setfileselect}
        setimageCropped={setimageCropped}
        height={298}
        width={398}
      />
      <Paper
        elevation={2}
        style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box style={{ position: 'relative' }}>
          <img src={user.image} alt='' className={classes.profileImage} />
          <input
            type='file'
            id='input-file'
            name='image'
            accept='image/x-png,image/gif,image/jpeg,image/jpg'
            onChange={handleChange}
            style={{ visibility: 'hidden', position: 'absolute' }}
          />
          <label fileselect={fileselect} for='input-file' style={{ position: 'absolute', bottom: 10, right: -5, cursor: 'pointer' }}>
            <EditIcon color='primary' />
          </label>
        </Box>

        <Typography component='p' className={classes.name}>
          {user.name}
        </Typography>
        <Typography component='p' className={classes.title}>
          {user.email}
        </Typography>

        <Grid container spacing={2} style={{ marginTop: '1rem' }} direction='row' alignItems='center'>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>Bio:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue}>{user.bio}</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>Gender:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue} style={{ textTransform: "capitalize" }}> {user.gender} </Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>School/College:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue}>{user.institution}</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>Phone:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue}>{user.phoneNumber}</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>Date of Birth:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue}>{new Date(user.dob)?.toDateString()}</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleKey}>Address:</Typography>
          </Grid>
          <Grid item md={6} lg={6}>
            <Typography className={classes.subTitleValue}>{user.address}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: '3rem' }}>
          <Button variant='outlined' onClick={() => handleEditDialogOpen()}>
            EDIT
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Profile;
