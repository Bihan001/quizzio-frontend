import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  homePage: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.common.black
        : theme.palette.grey[200],
  },
  heading: {
    fontSize: '3.2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  sectionHeading: {
    fontSize: '3rem',
    width: '80rem',
    border: '0px solid red',
    margin: '1.5rem auto',
    fontWeight: '600',
    color: theme.palette.grey[600],
  },
  carouselSection: {
    padding: '4rem',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
    marginBottom: '3rem',
  },
  examListSection: {
    paddingTop: '4rem',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
  },
}));
