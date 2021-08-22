import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { getIsLogged } from 'components/redux/selectors/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLogged = useSelector(getIsLogged);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
