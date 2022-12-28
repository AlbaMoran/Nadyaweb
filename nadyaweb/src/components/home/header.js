import "../../assets/styles/App.css"
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, ButtonGroup,  List, ListItemText,  Collapse, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const [openSubMenu, setOpenSubMenu] = React.useState(true);

  const handleClickMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
  <>
      <AppBar className="footerContainer">
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Marcellus',
                fontWeight: 400,
                color: 'inherit',
                textDecoration: 'none',
                fontSize: 24,
              }}>
              Nadya Poklad
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <div className="menuIcon">
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit">
                  <MenuIcon />
                </IconButton>
              </div>

              
              <Menu
                id="menu-appbar"
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

              <ButtonGroup className="menu-appbarMobile">

              <Button className="menu-appbarMobile"> The Artist </Button>
                <ListItemButton onClick={handleClickMenu}>
                  
                <ListItemText primary="Works" />
                  {openSubMenu ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Composer" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Pianist" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Musical event organizer" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Teacher" />
                  </ListItemButton>
                </List>
              </Collapse>
           
              <Button className="menu-appbarMobile"> Engage </Button>
              
              <Button className="menu-appbarMobile"> Upcoming Events </Button>
              
              <Button className="menu-appbarMobile"> Contact </Button>
              
              </ButtonGroup>
              </Menu>
            </Box>
         </Toolbar>
        </Container>
      </AppBar>
  </>
  
    )
}