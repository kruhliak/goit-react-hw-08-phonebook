import { Thumb } from './Filter.styles';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../redux/actions/contacts-action';
import * as selectors from 'components/redux/selectors/contacts-selectors';

const Filter = () => {
  const value = useSelector(selectors.getFilter);

  const dispatch = useDispatch();
  return (
    <Thumb>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
      />
    </Thumb>
  );
};

export default Filter;
