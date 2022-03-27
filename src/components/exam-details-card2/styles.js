import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  img: {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  tag: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[300],
    margin: '.5rem',
    borderRadius: '.5rem',
    padding: '.5rem',
  },
}));
