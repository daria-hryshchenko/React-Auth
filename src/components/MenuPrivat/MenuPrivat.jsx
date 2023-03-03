import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
import { Container } from './MenuPrivat.styled';

export const MenuPrivat = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <NavLink to="contacts">Contacts</NavLink>
      <ul>
        <li>
          <p>{user.email}</p>
        </li>
        <li>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </Container>
  );
};
