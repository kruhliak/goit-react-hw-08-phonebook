import { Spinner } from 'react-bootstrap';
import { StyledButton } from 'components/StyledComponent.styles';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/operations/contacts-operations';
import { useState } from 'react';

export default function ContactItem({ name, id, number }) {
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(deleteItem(id));

  const handleClick = () => setLoading(true);

  return (
    <li>
      {name}: {number}
      <StyledButton
        variant="danger"
        size="sm"
        type="button"
        onClick={() => {
          onDeleteContacts(id);
          handleClick();
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          <AiFillDelete fill="black" size="20" />
        )}
      </StyledButton>
    </li>
  );
}
