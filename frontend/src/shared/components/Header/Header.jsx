import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { PAGES } from './constants';
import Logo from '../../assets/svg/Logo';
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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar sx={{ boxShadow: 'none' }} position='static'>
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
                  <Typography sx={{ color: 'black' }} variant='highlighted'>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </BoxUp>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <List>
            {PAGES.map((page, i) => (
              <BoxDown>
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
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
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