import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0 15px;
`;

export const ListNav = styled.ul`
  display: flex;
  flex-direction: wrap;
  align-items: center;
  gap: 12px;
  list-style: none;
`;

export const HighlightedWord = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: wrap;
  align-items: center;
  gap: 12px;
  list-style: none;
`;

export const NavLinkPage = styled(NavLink)`
  display: inline-block;
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

export const Button = styled.button`
  color: #fff;
  padding: 10px 20px;
  border: none;
  background-color: #725cff;
  border-radius: 10px;
  margin-left: 20px; ;
`;
