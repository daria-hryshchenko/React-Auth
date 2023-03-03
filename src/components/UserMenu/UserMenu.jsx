import { ListMenu, NavLinks } from './UserMenu.styled';

export const UserMenu = () => {
  return (
    <ListMenu>
      <li>
        <NavLinks to="/">Home</NavLinks>
      </li>
      <li>
        <NavLinks to="login">Login</NavLinks>
      </li>
      <li>
        <NavLinks to="register">Register</NavLinks>
      </li>
    </ListMenu>
  );
};
