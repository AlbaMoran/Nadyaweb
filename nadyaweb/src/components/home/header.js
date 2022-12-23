
import "../../assets/styles/App.css"
import * as React from 'react';
import {AppBar,Box,Toolbar, IconButton,Typography,Menu,Container,Button,MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';



const pages = ['The Artist', 'Works', 'Engage', 'Upcoming Events','Contact'];
// const worksPages = ['Composer', 'Pianist', 'Educator'];
// const settings = ['Account', 'Dashboard', 'Logout'];

export default function Header () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  //const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar className="footerContainer">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Marcellus',
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 24 ,


            }}
          >
            Nadya Poklad
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">

              <div className="menuIcon">
                <MenuIcon />
              </div>  
            
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
           
              <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              { pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography 
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'flex' },
                      fontFamily: 'Marcellus',
                      fontWeight: 400,
                      color: 'Black',
                      textDecoration: 'none',
                      fontSize: 20
                    }}>
                      {page}
                  </Typography>
                </MenuItem>
              )) }
             
              </Menu>
          </Box>
            
          <Typography
            className="headerMenu"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Marcellus',
              fontWeight: 200,
              fontSize: 24,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             Nadya Poklad
          </Typography>

        <div className="headerMenu">
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} >
            {pages.map((page) => (
              <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', textTransform: 'capitalize', fontFamily: 'Marcellus' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </div>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}