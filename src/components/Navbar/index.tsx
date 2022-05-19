import { NavLink } from "react-router-dom";

import styles from './styles.module.scss';
import { ROUTES } from 'src/Routes';

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <NavLink className={({isActive}) => `${styles.navLink} ${isActive ? styles.active : ''}`} to={ROUTES.HOME}>
        <span className={styles.navText}>Home</span>
      </NavLink>
      <NavLink className={({isActive}) => `${styles.navLink} ${isActive ? styles.active : ''}`} to={ROUTES.ABOUT}>
        <span className={styles.navText}>About</span>
      </NavLink>
    </nav>
  );
}
