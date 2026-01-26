"use client";

import Link from 'next/link';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const path = usePathname();
  return (
    <nav className={classNames(styles.navbar, className)}>
      <Link className={classNames(styles.navLink, path === '/' && styles.active)} href="/">
        <span className={styles.navText}>Home</span>
      </Link>
      <Link className={classNames(styles.navLink, path === '/about' && styles.active)} href="/about">
        <span className={styles.navText}>About</span>
      </Link>
    </nav>
  );
}
