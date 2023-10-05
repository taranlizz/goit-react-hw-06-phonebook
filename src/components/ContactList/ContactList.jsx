import { ContactListEl } from 'components/ContactListEl/ContactListEl';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListEl key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
