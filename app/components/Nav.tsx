import { NavLink } from '@remix-run/react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">aeterna memorias.</NavLink>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'font-bold' : undefined)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'font-bold' : undefined)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
