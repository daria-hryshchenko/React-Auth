import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { addFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsloading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { Container, Title, SubTitle } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isloading = useSelector(getIsloading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isloading && <Loader />}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter
        onFilterChange={event => dispatch(addFilter(event.target.value))}
      />
      <ContactList />
    </Container>
  );
};
