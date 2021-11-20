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
    height: '55rem',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
    transition: '.2s ease',
    position: 'relative',
    color: 'white',
    '&:hover': {},
  },
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
  ongoing: {
    backgroundColor: 'green',
    fontSize: '2rem',
    height: 'fit-content',
    marginLeft: '3rem',
    padding: '.5rem',
    borderRadius: '.2rem',
  },
  upcoming: {
    backgroundColor: 'blue',
    fontSize: '2rem',
    height: 'fit-content',
    marginLeft: '3rem',
    padding: '.5rem',
    borderRadius: '.2rem',
  },
}));
