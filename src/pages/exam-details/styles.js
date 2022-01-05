

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  banner: {
    width: '100%',
    objectFit: 'cover',
  },
  dp: {
    position: 'relative',
    transform: 'translateY(-40%)',
    borderRadius: '8px',
    width: 180,
    height: 180,
    objectFit: 'cover',
  },
  examInfo: {
    backgroundColor: theme.palette.background.default,
    padding: '1.6rem',
    textAlign: 'center',
    display: 'flex',
    width: '75%',
  },
  joinCard: {
    position: 'absolute',
    width: '18%',
    // height: '24rem',
    backgroundColor: theme.palette.primary.main,
    padding: "1rem",
    transform: 'translateY(-20%)',  // Shifts Vertically
  },
  JoinButton: {
    width: '100%',
    margin: "1.0rem .5rem",
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.text.primary,
    fontWeight: '600',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    marginBottom: '4rem',
  },
  tabVerticalLine: {
    borderRight: `1.2px solid ${theme.palette.divider}`,
    overflow: 'visible !important',
  },
  tabStyle: {
    fontWeight: '600',
  },
}));
