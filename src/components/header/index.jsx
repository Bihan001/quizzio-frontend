import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { elevation = 2, title, description, children, className, style, ...rest } = props;
  return (
    <Paper elevation={elevation} className={`${classes.root} ${className}`} style={style} {...rest}>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='p'>{description}</Typography>
      {children}
    </Paper>
  );
};

export default Header;
