import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imgSize: {
    width: '4rem',
    height: '4rem',
    marginRight: '1rem',
  },
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
    width: '85%',
    border: '0px solid red',
    margin: '1rem auto',
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
    paddingBottom: '4rem',
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[100],
  },
  announcementSection: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[900]
        : 'rgb(26, 178, 115,.09)',
  },
  announcementCard: {
    padding: '1rem',
    borderTop: `0px solid ${
      theme.palette.mode === 'dark'
        ? theme.palette.common.black
        : theme.palette.grey[300]
    }`,
    borderBottom: `2px solid ${
      theme.palette.mode === 'dark'
        ? theme.palette.common.black
        : theme.palette.grey[300]
    }`,
    margin: '1rem',
  },
  announcementContainer: {
    margin: '0 auto',
    paddingTop: '2rem',
    '& > div': { width: '85%', margin: '0 auto', marginTop: '3rem' },
    '& > :nth-child(2)': {
      borderTop: `0px solid ${
        theme.palette.mode === 'dark'
          ? theme.palette.common.black
          : theme.palette.grey[300]
      } !important`,
    },
    '& > :last-child': {
      borderBottom: `0px solid ${
        theme.palette.mode === 'dark'
          ? theme.palette.common.black
          : theme.palette.grey[300]
      } !important`,
    },
  },
  announcementCardDesc: {
    width: '87%',
    margin: '0 auto',
  },
  announcementCardButtonDiv: {
    marginTop: '2rem',
    marginBottom: '2.6rem',
    width: '87%',
    margin: '0 auto',
  },
}));
