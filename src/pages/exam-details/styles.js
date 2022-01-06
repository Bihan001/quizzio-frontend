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
    // padding: '1.6rem',
    width: '75%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  joinCard: {
    position: 'relative',
    width: '25%',
    backgroundColor: theme.palette.background.default,
    padding: '1.5rem',
    transform: 'translateY(-20%)', // Shifts Vertically
  },
  JoinButton: {
    width: '100%',
    margin: '1.0rem auto',
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
}));
