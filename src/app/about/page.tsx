import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          {/* Using portrait sample as the photographer's photo for now */}
          <Image
            src="https://scontent-lhr6-1.cdninstagram.com/v/t51.2885-19/504455212_18066428606118494_7922568910431503881_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QFGh4fI2n4KOOLZhZ_0FfKfSdY_TdAWXVrqJCzOrkjNQIjPay8jOjpei-31dtlV6Wu6ERhn4aqAmTahXrc_Qcnk&_nc_ohc=0OJc7vJ4ibIQ7kNvwFWLX-W&_nc_gid=2pci6Z455SW6VffsAIdl8g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiqmuzpuzBqbWNJ3tLcI9W0jh_FcY0QHr8kjHzu4gthzg&oe=692947EF&_nc_sid=22de04"
            alt="Alexander"
            width={500}
            height={600}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>About TheOkeJacobs</h1>

          <p className={styles.bio}>
            <strong>From Lagos to London:</strong> My journey as a photographer
            began in Nigeria, where I developed a deep appreciation for vibrant
            colors, rich cultural traditions, and the power of storytelling
            through images. After relocating to the United Kingdom over a decade
            ago, I've had the privilege of blending my African heritage with
            British sophistication to create a unique photographic style.
          </p>

          <p className={styles.bio}>
            I specialize in <strong>wedding photography</strong>,{' '}
            <strong>portrait sessions</strong>,{' '}
            <strong>child dedications</strong>, and{' '}
            <strong>lifestyle photography</strong> across London, Birmingham,
            Manchester, and throughout the UK. My work has been featured in
            several publications, and I've had the honor of documenting over 500
            weddings, including traditional Nigerian ceremonies, British
            weddings, and beautiful multicultural celebrations.
          </p>

          <p className={styles.bio}>
            <strong>What sets me apart:</strong> I understand the cultural
            significance of every moment. Whether it's the traditional
            engagement (Introduction), the white wedding, or a naming ceremony,
            I know which moments matter most to you and your family. I speak
            Yoruba fluently and have deep respect for Igbo, Hausa, and other
            African cultural traditions.
          </p>

          <p className={styles.bio}>
            My photography philosophy is simple:{' '}
            <em>
              Every image should tell a story, evoke emotion, and stand the test
              of time.
            </em>
            I don't just capture what I see — I capture what you feel. From the
            nervous excitement before the ceremony to the joyful tears during
            the vows, I'm there to document it all with artistry and
            authenticity.
          </p>

          <div className={styles.credentials}>
            <h2 className={styles.credentialsTitle}>
              Credentials & Recognition
            </h2>
            <ul className={styles.credentialsList}>
              <li>✓ Featured in British Wedding Magazine</li>
              <li>✓ Member of the Professional Photographers Association</li>
              <li>✓ Certified in Advanced Wedding Photography</li>
              <li>✓ 500+ Five-Star Reviews</li>
              <li>✓ Trusted by Nigerian & African Communities Across the UK</li>
            </ul>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>500+</span>
              <span className={styles.label}>Memories Captured</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>700+</span>
              <span className={styles.label}>Happy Clients</span>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <p className={styles.ctaText}>
              Ready to preserve your precious moments? Let's create something
              beautiful together.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Book Your Session Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
