import React, { useState, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { Dialog, DialogContent } from 'components/dialog';
import Cropper from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import getCroppedImg from './crop-img-utils';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//import 'react-image-crop-component/style.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
export default function CropImageDialog(props) {
  const { open, setOpen } = props;
  const [croppedArea, setcroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleClose = () => {
    props.setfileselect(null);
    setOpen(false);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setcroppedArea(croppedAreaPixels);
  }, []);

  const cropSize = { height: props.height, width: props.width };

  const reset = () => {
    setZoom(1);
    setRotation(0);
    setCrop({ x: 0, y: 0 });
  };

  const save = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(props.fileselect, croppedArea, rotation);
      console.log('donee', croppedImage);
      props.setfileselect(null);
      props.setimageCropped(croppedImage);
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedArea, rotation]);

  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth='xl'>
      <DialogContent style={{ padding: '3rem' }}>
        <div style={{ position: 'relative', height: '50rem' }}>
          <Cropper
            image={props.fileselect}
            crop={crop}
            zoom={zoom}
            aspect={3 / 4}
            rotation={rotation}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onRotationChange={setRotation}
            onZoomChange={setZoom}
            cropSize={cropSize}
          />
        </div>

        <div>
          <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
            <div className='zoom'>
              <p style={{ fontSize: '20px' }}>Zoom</p>
              <Slider
                className='zoomslider'
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby='Zoom'
                onChange={(e, zoom) => setZoom(zoom)}
                classes={{ root: 'slider' }}
                style={{ width: '20vw' }}
              />
            </div>
            <div className='rotate'>
              <p style={{ fontSize: '20px' }}>Rotate</p>
              <Slider
                className='rotateslider'
                value={rotation}
                min={-180}
                max={180}
                step={1}
                aria-labelledby='Zoom'
                onChange={(e, rotation) => setRotation(rotation)}
                classes={{ root: 'slider' }}
                style={{ width: '20vw' }}
              />
            </div>
          </Stack>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button size='large' onClick={() => save()} variant='contained'>
              Save
            </Button>
            <Button size='large' onClick={() => handleClose()} variant='contained' style={{ marginLeft: '2rem' }}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
