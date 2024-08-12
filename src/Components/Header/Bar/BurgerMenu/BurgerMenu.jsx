import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { logo } from "../../../../img/img";
import ButtonContact from "../../../ButtonContact/ButtonContact";

const pages = [
  { text: "Послуги", href: "section1" },
  { text: "Контакти", href: "section2" },
  { text: "Майстри", href: "section3" },
  { text: "ми тут", href: "section4" },
];

function BurgerMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        background: "rgba(255, 255, 255, 0)",
        boxShadow: "none",
        position:"relative",
        
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          background: "rgba(255, 255, 255, 0)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 3,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
            
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="" style={{ height: "80px" }} />
          </div>
        </Typography>
        <Toolbar disableGutters >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography href={`#${page.href}`} component="a" textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",  
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex",},
              maxWidth: "450px",
              width: "450px",
              justifyContent: "space-between",
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.text}
                onClick={() => {
                  handleCloseNavMenu();
                  document
                    .getElementById(page.href)
                    .scrollIntoView({ behavior: "smooth" });
                    
                }}
                sx={{padding:"5px 0 0 0"}}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 4, color: "white", display: "block",fontSize:18}}
                >
                  {page.text}
                </Button>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px"}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                  component="a"
                   href={`#${setting.href}`}
                    textAlign="center"
                  >
                    {setting.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <ButtonContact paddingButtom="10px" isBlinking={true}/>
      </Container>
    </AppBar>
  );
}
export default BurgerMenu;
