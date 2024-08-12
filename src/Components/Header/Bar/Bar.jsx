import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import BurgerMenu from './BurgerMenu/BurgerMenu';



function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

  

export default function ElevateAppBar(props) {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment >
      <ElevationScroll {...props}>
        <AppBar  sx={{
            backgroundColor: isDark ? "rgba(3, 3, 3, 0.5)" : "rgba(3, 3, 3, 0)",
            height: "95px",
            transition: "background-color 0.4s ease-in-out",
            display:"flex",
            justifyContent:"center",
          }}>
          <Toolbar sx={{display:"flex",
      justifyContent:"center"}}>
          <BurgerMenu/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}