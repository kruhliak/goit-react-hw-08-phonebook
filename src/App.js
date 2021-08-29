import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchUser } from 'components/redux/operations/auth-operation';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { getIsLoading } from 'components/redux/selectors/auth-selectors';
import { Spinner } from 'react-bootstrap';

const HomePage = lazy(() =>
  import('components/views/HomePage' /* webpackChunkName: "home-page" */),
);
const NotFoundPage = lazy(() =>
  import(
    'components/views/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);
const AppBar = lazy(() =>
  import('components/AppBar/AppBar' /* webpackChunkName: "app-bar" */),
);
const RegisterPage = lazy(() =>
  import(
    'components/views/RegisterPage' /* webpackChunkName: "register-page" */
  ),
);
const ContactsPage = lazy(() =>
  import(
    'components/views/ContactsPage' /* webpackChunkName: "contacts-page" */
  ),
);
const LoginPage = lazy(() =>
  import('components/views/LoginPage' /* webpackChunkName: "login-page" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);

  return (
    !isLoading && (
      <div id="container">
        <Suspense fallback={<Spinner animation="border" role="status" />}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <AppBar />

          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
  );
}
