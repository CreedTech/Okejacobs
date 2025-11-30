import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={`container ${styles.content}`}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/DSC_0230.JPG"
            alt="TheOkeJacobs - Award-Winning Photographer"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
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
            </em>{' '}
            I don't just capture what I see, I capture what you feel. From the
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
