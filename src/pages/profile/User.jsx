
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import user from 'assets/icons/user.png';
import { Grid, Typography, Button, Box, TextField, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SimpleModal from './SimpleModal';
import { makeStyles, useTheme } from '@mui/styles';
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
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  name: {
    fontSize: "23px",
    fontWeight: 500,
    color: "#31344b",
    margin: "10px 0 5px 0",
  },
  title: {
    color: "#44476a",
    fontWeight: "400",
    fontSize: "16px",
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    setfileselect(URL.createObjectURL(selectedFile));
    if (selectedFile) {
      console.log('a');
      if (types.includes(selectedFile.type)) {
        setImage(selectedFile);
      } else {
        console.log('b');
        setImage(null);
      }
    }
  };

  useEffect(() => {
    if (!fileselect) setTest(false);
    else setTest(!test);
  }, [fileselect]);



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
            <Typography className={classes.title}  >  Developer :)  </Typography>


            <Grid container spacing={2} style={{ marginTop: "1.1rem" }}>
              <Grid item md={12} lg={12} xs={12} >
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <div style={{ width: '100%', }}>
                    <Typography className={classes.subTitleKey} > Email: </Typography>
                  </div>

                  <div className={classes.subTitleValue}>
                    niharikaDutta@gamil.com
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
                    <Typography className={classes.subTitleKey} > Phone: </Typography>
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
                    Hacking is building things that you have always wanted to have built yet.
                  </div>
                </div>
              </Grid>
            </Grid>

            <Button variant='outlined' size='large' onClick={handleOpen}>
              EDIT
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <label className='form-input'>Name* :</label>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField type='text' id='name' sx={{ width: '100%' }} placeholder='User Name' />
                  </Grid>
                  <Grid item xs={2}>
                    <label className='form-input'>Email-Id* :</label>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField type='text' sx={{ width: '100%' }} id='email' placeholder='Email-Id' />
                  </Grid>
                  <Grid item xs={2}>
                    <label className='form-input'>Institution* :</label>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField type='text' sx={{ width: '100%' }} id='iname' placeholder='Institution Name' />
                  </Grid>
                  <Grid item xs={2}>
                    <label className='form-input'>Date of Birth * :</label>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField type='date' sx={{ width: '100%' }} id='date' />
                  </Grid>
                  <Grid item xs={2}>
                    <label className='form-input'>Address * :</label>
                  </Grid>
                  <Grid item xs={10}>
                    <TextField type='text' id='name' sx={{ width: '100%' }} placeholder='Address' />
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant='contained' color='success'>
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button onClick={handleClose} variant='contained' color='error'>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div></div>
        </Grid>
      </Grid >
    </>
  );
};

export default User;
