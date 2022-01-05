
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/styles';

const RequestFullScreen = (props) => {

  const theme = useTheme();
  const { EnterFullScreen = () => { } } = props;

  return (
    <div
      style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <Typography variant='h4' color={theme.palette.grey[700]} marginBottom='1rem'>
        Enter Full Screen to continue
      </Typography>
      <Button variant='contained' onClick={() => EnterFullScreen()}>
        Enter
      </Button>
    </div>
  );
};

export default RequestFullScreen;
