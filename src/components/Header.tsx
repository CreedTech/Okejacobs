'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${isHome && !menuOpen ? styles.headerHome : styles.headerDefault}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          TheOkeJacobs
        </Link>
        
        <button className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="/gallery" className={styles.link} onClick={closeMenu}>Gallery</Link>
          <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
          <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
