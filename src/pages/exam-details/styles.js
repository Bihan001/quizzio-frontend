import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  banner: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
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
  joinButton: {
    width: '100%',
    margin: '1rem auto',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  joinText: {
    margin: '0 auto',
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: '50rem',
    paddingBottom: '10rem',
  },
  tabVerticalLine: {
    borderRight: `1.2px solid ${theme.palette.divider}`,
    overflow: 'visible !important',
  },
}));
