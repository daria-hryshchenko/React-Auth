import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  list-style: none;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding: 15px;
  transition: all 0.3s;
  color: black;
  font-size: 20px;
  &.active {
    color: #725cff;
    border-bottom: 2px solid #725cff;
  }
`;
