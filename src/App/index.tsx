import { useRef } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Logo from 'assets/logo.svg';
import 'scss/application.scss';
// import CustomCursor from "./components/CustomCursor";

import Router from './components/Router';
import styles from './styles.module.scss';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const logoRef = useRef<HTMLAnchorElement>(null);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Link className={styles.logo} to="/" ref={logoRef}>
        <Logo className={styles.logoImage} />
      </Link>
      <div className={styles.main}>
        <Router logoRef={logoRef} />
      </div>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
