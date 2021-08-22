import { useEffect } from 'react';
import { List } from './ContactList.styles';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import {
  getVisibleContacts,
  getStatusLoader,
} from '../redux/selectors/contacts-selectors';
import Fallback from '../Loader/Loader';
import {
  fetchContactsList,
  deleteItem,
} from '../redux/operations/contacts-operations';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const loading = useSelector(getStatusLoader);

  const onDeleteContacts = id => dispatch(deleteItem(id));

  useEffect(() => dispatch(fetchContactsList()), [dispatch]);

  return (
    <>
      {loading && <Fallback />}
      <List>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDeleteContacts(contact.id)}>
              <AiFillDelete size="20" />
            </button>
          </li>
        ))}
      </List>
    </>
  );
}

export default ContactList;
