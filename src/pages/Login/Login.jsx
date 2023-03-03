import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import { Form, Input, Button } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();
  const handelSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));
    event.target.reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
