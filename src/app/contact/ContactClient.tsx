'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check URL for success parameter (client-side only)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('success') === 'true') {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 8000);
        // Clean URL
        window.history.replaceState({}, '', '/contact');
      }
    }
  }, []);

  return (
    <div className={`container ${styles.contact}`}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.subtitle}>
        Available for commissions and collaborations.
      </p>

      {showSuccess && (
        <div className={styles.successBanner}>
          <div className={styles.successContent}>
            <span className={styles.successIcon}>✓</span>
            <div>
              <strong className={styles.successTitle}>
                Message Sent Successfully!
              </strong>
              <p className={styles.successText}>
                Thank you for reaching out. We'll get back to you within 24
                hours.
              </p>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setShowSuccess(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className={styles.wrapper}>
        <form
          className={styles.form}
          action="https://formsubmit.co/69d8911520eabf186af1cc1a2d915cba"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New booking inquiry from website!"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://www.okejacobs.online/contact?success=true"
          />

          <div className={styles.group}>
            <label htmlFor="name" className={styles.label}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              placeholder="+44"
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="service" className={styles.label}>
              Service Interested In
            </label>
            <select id="service" name="service" className={styles.input}>
              <option value="">Select a service</option>
              <option value="Wedding Photography">Wedding Photography</option>
              <option value="Portrait Session">Portrait Session</option>
              <option value="Lifestyle Photography">
                Lifestyle Photography
              </option>
              <option value="Fashion Photography">Fashion Photography</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={styles.textarea}
              placeholder="Tell us about your project, event date, location, etc..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <div className={styles.emails}>
              <a href="mailto:otg@okejacobs.online">otg@okejacobs.online</a>
              <a href="mailto:okedamilola41@gmail.com">
                okedamilola41@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.infoItem}>
            <h3>Phone</h3>
            <a href="tel:+447833967146">+44 783 396 7146</a>
          </div>
          <div className={styles.infoItem}>
            <h3>Studio</h3>
            <p>London, UK</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/the_okejacobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@big_okejacobs1"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
