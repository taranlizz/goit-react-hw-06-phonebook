import PropTypes from 'prop-types';
import { Button, Item } from './ContactListEl.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListEl = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactListEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
