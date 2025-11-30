import Image from 'next/image';
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
            I am a photographer based in the United Kingdom, specializing in portrait, wedding, lifestyle, and fashion photography. 
            My work explores the silence and stillness of the world around us, seeking to capture moments of quiet beauty in an often chaotic world.
          </p>
          <p className={styles.bio}>
            With over 10 years of experience, I have developed a distinct style that emphasizes composition, light, and texture. 
            I believe that photography is not just about capturing a scene, but about evoking an emotion.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>10+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>50+</span>
              <span className={styles.label}>Exhibitions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
