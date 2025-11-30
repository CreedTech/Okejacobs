import styles from './Footer.module.css';
import { FaInstagram, FaTiktok, FaSnapchat, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the_okejacobs?igsh=bDJlMDgxeXFjOW50&utm_source=qr',
      icon: FaInstagram,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@big_okejacobs1?_r=1&_t=ZS-91qAyAz5Bd2',
      icon: FaTiktok,
    },
    {
      name: 'Snapchat',
      url: 'https://snapchat.com/t/H6l8RPIO',
      icon: FaSnapchat,
    },
    {
      name: 'Email',
      url: 'mailto:otg@okejacobs.online',
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} TheOkeJacobs Photography. All rights
          reserved.
        </p>
        <div className={styles.socials}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Icon className={styles.icon} />
                <span className={styles.linkText}>{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}