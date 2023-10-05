import { Layout } from '../LayoutComponent/Layout.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { AppTitle, ContactsTitle } from './App.styled';

export const App = () => {
  return (
    <Layout>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter />
      <ContactList />
    </Layout>
  );
};
