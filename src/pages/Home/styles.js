import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  carouselSection: {
    padding: '4rem',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
  },
}));
