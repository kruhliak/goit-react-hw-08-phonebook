import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsLogged } from './redux/selectors/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLogged = useSelector(getIsLogged);
  const shouldRedirect = isLogged && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
