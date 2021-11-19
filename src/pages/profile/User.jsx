
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import user from 'assets/icons/user.png';
import { Grid, Typography, Button, Box, TextField, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import SimpleModal from './SimpleModal';
import TextInputField from 'components/text-input-field';
import { makeStyles, useTheme } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import './user.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 3,
};

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: "23px",
    fontWeight: 600,
    color: theme.palette.primary.main,
    margin: "10px 0 5px 0",
  },
  title: {
    fontWeight: "700",
    fontSize: "16px",
    paddingBottom: "1rem",
  },
  subTitleKey: {
    width: "100%",
    fontSize: "1.6rem",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  subTitleValue: {
    fontSize: "1.5rem",
    fontWeight: 500,
    width: "100%",
  },
  labelSmall: {
    fontSize: "1.5rem",
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
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className='container'>

            {/* Profile Picture Field  */}
            <div className='img-area'>
              <div className='inner-area'>
                <img src={user} alt='' />
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
                  style={{ marginLeft: '7vw', marginTop: '5vw', position: 'absolute' }}
                >
                  <EditIcon color='primary' onClick={(e) => setpublishPhoto(true)}></EditIcon>
                </label>

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
              </div>
            </div>


            <Typography className={classes.name}  >  Niharika Dutta  </Typography>
            <Typography className={classes.title}  >   niharikaDutta@gamil.com :)  </Typography>


            <Grid container spacing={2} style={{ marginTop: "1.1rem" }}>
              <Grid item md={12} lg={12} xs={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between', justifyContent: "flex-start" }} >
                  <div style={{ width: '100%', }} >
                    <Typography className={classes.subTitleKey} > Bio   <EditIcon color='primary' style={{ fontSize: "2rem" }} />  : </Typography>
                  </div>

                  <div className={classes.subTitleValue}  >
                    Developer
                  </div>
                </div>
              </Grid>

              <Grid item md={12} lg={12} xs={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between', justifyContent: "flex-start" }} >
                  <div style={{ width: '100%', }} >
                    <Typography className={classes.subTitleKey} > Gender: </Typography>
                  </div>

                  <div className={classes.subTitleValue}  >
                    Female
                  </div>
                </div>
              </Grid>

              <Grid item md={12} lg={12} xs={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div style={{ width: '100%', }}>
                    <Typography className={classes.subTitleKey} > School/College: </Typography>
                  </div>

                  <div className={classes.subTitleValue}>
                    UEM
                  </div>
                </div>
              </Grid>

              <Grid item md={12} lg={12} xs={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div style={{ width: '100%', }}>
                    <Typography className={classes.subTitleKey} > Phone    <PhoneEnabledIcon color='primary' style={{ fontSize: "2rem" }} />  : </Typography>
                  </div>

                  <div className={classes.subTitleValue}>
                    +1232387953
                  </div>
                </div>
              </Grid>

              <Grid item md={12} lg={12} xs={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div style={{ width: '100%', }}>
                    <Typography className={classes.subTitleKey} > Date Of Birth: </Typography>
                  </div>

                  <div className={classes.subTitleValue}>
                    28 th April, 2000
                  </div>
                </div>
              </Grid>

              <Grid item >
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div style={{ width: '100%', }}>
                    <Typography className={classes.subTitleKey} > Address: </Typography>
                  </div>

                  <div className={classes.subTitleValue} >
                    Hacking is building things that you have alway yet.
                  </div>
                </div>
              </Grid>
            </Grid>

            <Box sx={{ marginTop: "3rem" }}>
              <Button variant='outlined' onClick={() => handleOpen()}  >EDIT </Button>
            </Box>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <Grid container spacing={1}>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Name'
                      placeholder='name'
                      required
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Email'
                      placeholder='email'
                      required
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Bio'
                      placeholder='bio'
                      required
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Date Of Birth'
                      type="date"
                      placeholder='Dob'
                      required
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Address'
                      multiline row={2}
                      placeholder='type here...'
                      required
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <TextInputField
                      label='Institute'
                      placeholder='institute'
                      fullWidth={true}
                      labelClassName={classes.labelSmall}
                    />
                  </Grid>

                  <Grid item xs={12} lg={12} md={12}>
                    <Typography
                      align='left'
                      variant='p'
                      className={classes.labelSmall}
                    >
                      Password
                      {true ? <span style={{ color: 'red' }}>*</span> : null}
                    </Typography>

                    <OutlinedInput
                      label="Password"
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      // value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            fullWidth={true}
                            style={{ marginRight: '1rem', width: "6rem", padding: "8.5px 14px" }}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid>


                  <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: "row", marginTop: "3rem", width: "100%" }} >
                    <div>
                      <Button onClick={() => handleClose()} variant='outlined' color='error'>
                        Cancel
                      </Button>
                    </div>

                    <div>
                      <Button variant='contained'>
                        Save
                      </Button>
                    </div>
                  </div>

                </Grid>
              </Box>
            </Modal>

          </div>
        </Grid>
      </Grid >
    </>
  );
};

export default User;
