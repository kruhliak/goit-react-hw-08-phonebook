import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'components/redux/selectors/auth-selectors';
import { userLogout } from 'components/redux/operations/auth-operation';
import { StyledButton } from 'components/StyledComponent.styles';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>

      <StyledButton
        variant="danger"
        size="sm"
        type="submit"
        onClick={() => dispatch(userLogout())}
      >
        SIGN OUT
      </StyledButton>
    </div>
  );
}
