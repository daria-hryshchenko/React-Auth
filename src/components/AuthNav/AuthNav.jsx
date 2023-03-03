import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import {
  Container,
  List,
  NavLinkPage,
  ListNav,
  HighlightedWord,
  Button,
} from './AuthNav.styled';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <ListNav>
        <li>
          <NavLinkPage to="/">Home</NavLinkPage>
        </li>
        <li>
          <NavLinkPage to="contacts">Contacts</NavLinkPage>
        </li>
      </ListNav>
      <List>
        <li>
          <p>
            <HighlightedWord>Welcome,</HighlightedWord>
            {user.email}
          </p>
        </li>
        <li>
          <Button type="button" onClick={handleLogout}>
            Logout
          </Button>
        </li>
      </List>
    </Container>
  );
};
