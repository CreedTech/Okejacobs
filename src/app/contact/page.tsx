import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={`container ${styles.contact}`}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.subtitle}>Available for commissions and collaborations.</p>
      
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" className={styles.input} />
          </div>
          <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} />
          </div>
          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" rows={5} className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
        
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <div className={styles.emails}>

            <a href="mailto:otg@okejacobs.online">otg@okejacobs.online</a>
            <a href="mailto:okedamilola41@gmail.com">okedamilola41@gmail.com</a>
            </div>
          </div>
          <div className={styles.infoItem}>
            <h3>Studio</h3>
            <p>123 Creative Lane<br/>London, UK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
