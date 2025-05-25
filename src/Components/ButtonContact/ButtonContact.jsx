
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, keyframes } from '@mui/material/styles';

const blinkAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px 6px rgba(255, 165, 0, 0);
  }
  50% {
    box-shadow: 0 0 10px 6px rgba(255, 165, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 10px 6px rgba(255, 165, 0, 0);
  }
`;

const CustomButton = styled(Button)(({ theme, isBlinking }) => ({
  backgroundColor: '#A56339',
  color: '#FFF',
  fontWeight: 'bold',
  padding: '15px 50px',
  textTransform: 'uppercase',
  animation: isBlinking ? `${blinkAnimation} 3s ease-in-out infinite` : 'none',
  '&:hover': {
    backgroundColor: '#8A4B2F',
  },
}));

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'inline-block',
  width: 'fit-content',
}));

const ButtonContact = ({
  paddingButtom,
  isBlinking = true,
  display,
  fontSize,
}) => {
  return (
    <CustomLink
      to="https://n827968.alteg.io/company/777273/personal/menu?o="
      style={{ display: display }}
    >
      <CustomButton
        isBlinking={isBlinking}
        style={{ padding: paddingButtom, fontSize: fontSize }}
        variant="contained"
      >
        Записатися
      </CustomButton>
    </CustomLink>
  );
};

export default ButtonContact;