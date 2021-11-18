import React, { useState, useEffect } from 'react';
import user from 'assets/icons/user.png';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import SimpleModal from './SimpleModal';
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

const User = () => {
  const [publishPhoto, setpublishPhoto] = useState(false);
  const [test, setTest] = useState(false);
  const [imageCropped, setimageCropped] = useState(false);
  const [image, setImage] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const [fileselect, setfileselect] = useState(null);
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className='container'>
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
            <div className='name'>LoL Pug</div>
            <div className='about'>Teacher</div>
            <div className='presonal-inform'>
              <ul className='list-unstyled'>
                <li>
                  <b>Name:</b>Lol pug
                </li>
                <li>
                  <b>Phone:</b>+91 23456 78910
                </li>
                <li>
                  <b>Email:</b>lol@email.com
                </li>
                <li>
                  <b>Date of Birth:</b> 6 January 1987
                </li>
                <li>
                  <b>Address:</b>Inox Box 1546, Lorem.
                </li>
                <li>
                  <b>Subject:</b>Epsum
                </li>
              </ul>
            </div>
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
      </Grid>
    </>
  );
};

export default User;
