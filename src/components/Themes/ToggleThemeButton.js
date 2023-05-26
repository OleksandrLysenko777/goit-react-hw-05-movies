import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: 26px;
  font-weight: 400;
  background-color: transparent;
  color: orange;
  border: none;
  border-radius: 50px;
  cursor: pointer;


  &:hover,
  &:focus {
    color: red;
  }
`;

const ToggleThemeButton = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? <span>&#9789;</span> : <span>&#9728;</span>}
    </Button>
  );
};
ToggleThemeButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default ToggleThemeButton;
