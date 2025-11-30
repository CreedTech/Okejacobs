import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} TheOkeJacobs Photography. All rights
          reserved.
        </p>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/the_okejacobs?igsh=bDJlMDgxeXFjOW50&utm_source=qr" className={styles.link}>
            Instagram
          </a>
          <a href="https://www.tiktok.com/@big_okejacobs1?_r=1&_t=ZS-91qAyAz5Bd2" className={styles.link}>
            TikTok
          </a>
          <a href="https://snapchat.com/t/H6l8RPIO" className={styles.link}>
            Snapchat
          </a>
          <a href="mailto:otg@okejacobs.online" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
