// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterPage from './components/views/RegisterPage';
import ContactsPage from 'components/views/ContactsPage';
import LoginPage from 'components/views/LoginPage';
import NotFoundPage from 'components/views/NotFoundPage';
import AppBar from 'components/AppBar/AppBar';
// import { fetchUser } from 'components/redux/operations/auth-operation';

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, [dispatch]);

  return (
    <div id="container">
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
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}
