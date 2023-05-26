import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 2px solid lightgrey;
  box-shadow: 0px 6px 3px -2px rgba(0, 0, 0, 0.36);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 2px solid lightgrey;
  box-shadow: 0px 6px 3px -2px rgba(0, 0, 0, 0.36);
  gap: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 26px;
  font-weight: bold;
  gap: 20px;
`;

const activeNav = active => {
  switch (active) {
    case 'on':
      return 'color: orange';
    case 'off':
      return 'color: grey';
    default:
      return 'color: grey';
  }
};

export const Link = styled(NavLink)`
  text-decoration: none;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: orange;
  }
  &:not(:hover, :focus) {
    ${({ active }) => activeNav(active)}
  }
  nav &:hover,
  nav &:focus {
    color: red;
  }
`;

