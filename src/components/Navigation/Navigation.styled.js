import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: red;
  }
`;
