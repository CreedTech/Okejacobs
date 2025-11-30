import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} TheOkeJacobs Photography. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="#" className={styles.link}>Instagram</a>
          <a href="#" className={styles.link}>Twitter</a>
          <a href="#" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  );
}
