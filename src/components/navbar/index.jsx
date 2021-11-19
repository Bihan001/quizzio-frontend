import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar(props) {
  const { toggleTheme } = props;
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Typography variant='h6' noWrap component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
              EXAM SIMULATOR
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant='outlined' size='small' style={{ color: 'white' }}>
              Sign In
            </Button>
            <Button variant='outlined' size='small' style={{ color: 'white' }}>
              Sign Up
            </Button>
            <Button variant='outlined' size='small' component={Link} to='/create-exam' style={{ color: 'white' }}>
              Create Exam
            </Button>
            <IconButton LinkComponent={Link} to='/profile' size='large' edge='start' color='inherit' style={{ marginLeft: 1 }}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton size='large' edge='start' color='inherit' onClick={() => toggleTheme()} sx={{ ml: 1 }}>
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </Box>
  );
}
