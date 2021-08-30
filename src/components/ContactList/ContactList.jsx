import { List } from './ContactList.styles';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors/contacts-selectors';
import { fetchContactsList } from '../redux/operations/contacts-operations';

import ContactItem from 'components/ContactItem/ContactItem';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  useEffect(() => dispatch(fetchContactsList()), [dispatch]);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
}

export default ContactList;
