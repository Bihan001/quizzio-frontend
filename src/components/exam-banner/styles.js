import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  examBanner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '48rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    transition: '.2s ease',
    '&:hover': {},
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
}));
