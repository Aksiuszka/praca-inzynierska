import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase';
import { logout } from '../../../slices/authSlice';
import { useLanguage } from '../../context/language';
import { PAGES, SETTINGS } from './constants';
import Logo from '../Logo';
import {
  CustomToolbar as Toolbar,
  CustomAppbar as AppBar,
  CustomContainer as Container,
  CustomMenuIcon as MenuIcon,
  CustomBoxDown as BoxDown,
  CustomBoxUp as BoxUp,
  CustomList as List,
  CustomListItem as ListItem,
  CustomListItemButton as ListItemButton,
  Dot,
  CustomMenuItem as MenuItem,
} from './styles';
import CustomButton from '../Button';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { language, changeLanguage } = useLanguage();
  const { email, username, photoUrl } = useSelector((data) => data.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== null) {
      changeLanguage(newLanguage);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu();

    if (setting.title === 'logout') {
      localStorage.removeItem('user');
      dispatch(logout());

      signOut(auth)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <AppBar color='transparent' sx={{ boxShadow: 'none' }} position='static'>
      <Container maxWidth='xxl'>
        <Toolbar disableGutters>
          <BoxDown>
            <Logo />
          </BoxDown>
          <BoxUp>
            <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>

            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  {page.icon}
                  <Typography
                    sx={{
                      color: 'black',
                      paddingInline: '1rem',
                    }}
                    variant='highlighted'
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </BoxUp>
          <List>
            {PAGES.map((page, i) => (
              <BoxDown key={page.title}>
                <ListItem key={page.title} disablePadding>
                  <ListItemButton>
                    <Link style={{ textDecoration: 'none', color: '#2D2D2D' }} to={page.path}>
                      <Typography variant='highlighted'>{page.title}</Typography>
                    </Link>
                  </ListItemButton>
                  {!PAGES[i - 2] ? <Dot /> : null}
                </ListItem>
              </BoxDown>
            ))}
          </List>
          <Box sx={{ display: 'flex' }}>
            <ToggleButtonGroup
              sx={{ marginInline: '2rem' }}
              value={language}
              exclusive
              onChange={handleLanguageChange}
              aria-label='Language Selector'
            >
              <ToggleButton
                value='en'
                aria-label='EN'
                sx={{
                  borderRadius: '0.5rem',
                  background: '#F379A1',
                  color: 'white',
                  border: 'none',
                }}
              >
                EN
              </ToggleButton>
              <ToggleButton
                value='pl'
                aria-label='PL'
                sx={{
                  borderRadius: '0.5rem',
                  background: '#F379A1',
                  color: 'white',
                  border: 'none',
                }}
              >
                PL
              </ToggleButton>
            </ToggleButtonGroup>
            {email || username ? (
              <>
                <Tooltip title='Open settings'>
                  <IconButton data-testid='avatarBtn' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {photoUrl !== '' ? (
                      <Avatar alt='User Photo' src={photoUrl} sx={{ background: '#F379A1' }} />
                    ) : (
                      <Avatar alt='User Initial' sx={{ background: '#F379A1' }}>
                        {email.charAt(0).toUpperCase()}
                      </Avatar>
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {SETTINGS.map((setting) => (
                    <MenuItem key={setting.title} onClick={() => handleMenuItemClick(setting)}>
                      {setting.icon}
                      <Link style={{ textDecoration: 'none', color: '#2D2D2D' }} to={setting.path}>
                        <Typography
                          sx={{
                            color: 'black',
                            paddingInline: '1rem',
                          }}
                          variant='highlighted'
                        >
                          {setting.title}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <CustomButton
                sx={{ padding: '0.2rem 1.4rem' }}
                variant='regular'
                label='Login'
                onClick={handleLogin}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
