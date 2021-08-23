import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsLogged } from './redux/selectors/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogged = useSelector(getIsLogged);

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
