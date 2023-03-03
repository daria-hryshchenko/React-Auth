import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import { Form, Input, Button } from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(user));
    event.target.reset();
  };
  return (
    <Form onSubmit={handelSubmit}>
      <Input type="text" name="name" placeholder="name" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
