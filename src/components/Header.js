import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

// Link component allows to change path without refreshing whole page */}
// NavLink can handle different styling if link is active */}

// UPDATE with React Router DOM v6 - to access v5 look at previous commits */}
// a) activeClassName no longer exists and is replaced by anonymous fn with
//   parameter obj navData that has internally changed property isActive ->
//   change from <NavLink activeClassName={classes.active} to='/products'>
//   to

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to='/welcome'
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : '')}
              to='/products'
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
