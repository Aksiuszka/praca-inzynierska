import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';
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

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { language, changeLanguage } = useLanguage();

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
  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      changeLanguage(newLanguage);
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
          <Box sx={{ flexGrow: 0 }}>
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
            <Tooltip title='Open settings'>
              <IconButton data-testid='avatarBtn' onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt='Remy Sharp'
                  src='/static/images/avatar/2.jpg'
                  sx={{ background: '#F379A1' }}
                />
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
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
