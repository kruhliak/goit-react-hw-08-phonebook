import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'components/redux/selectors/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

function Navigation() {
  const isLogged = useSelector(getIsLogged);
  return (
    <nav>
      {isLogged && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
