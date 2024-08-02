import { NavLink } from '@remix-run/react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <NavLink to="/">Logo</NavLink>
      </div>
      <button className={styles.search} />
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
      <button className={styles.menu} />
    </nav>
  );
};

export default Nav;
