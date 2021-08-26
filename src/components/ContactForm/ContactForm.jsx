import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './ContactForm.styles';
import { getContacts } from '../redux/selectors/contacts-selectors';
import { createItem } from '../redux/operations/contacts-operations';
import { StyledButton } from 'components/StyledComponent.styles';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setsNumber] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(getContacts);

  const handleChangeForm = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        return setName(value);

      case 'phone':
        return setsNumber(value);

      default:
        console.log('default');
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const findContact = state.find(contact => contact.name.includes(name));

    if (findContact) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(createItem({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setsNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleChangeForm}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            onChange={handleChangeForm}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            autoComplete="off"
          />
        </label>
        <StyledButton variant="success" size="sm" type="submit">
          ADD CONTACT
        </StyledButton>
      </Form>
    </div>
  );
}
