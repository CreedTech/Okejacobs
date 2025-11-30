'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import PhotoGrid, { MediaItem } from '@/components/PhotoGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Reveal
      gsap.fromTo(
        '.reveal',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power4.out',
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const allItems: MediaItem[] = [
     // Wedding
     { 
      id: 1, 
      src: '/images/wedding_sample_1763932940737.png', 
      alt: 'Wedding Vows', 
      category: 'Wedding',
      title: 'Eternal Vows',
      description: 'Captured during the quiet moments before the ceremony.',
      type: 'image'
    },
    { 
      id: 101, 
      src: '/images/portrait_sample_1763932211246.png', 
      alt: 'First Dance', 
      category: 'Wedding',
      title: 'First Dance',
      description: 'The couple sharing their first dance as husband and wife.',
      type: 'image'
    },
    // Lifestyle
    { 
      id: 2, 
      src: '/images/lifestyle_sample_1763932967561.png', 
      alt: 'Urban Coffee', 
      category: 'Lifestyle',
      title: 'Morning Brew',
      description: 'A candid shot of morning rituals in a London cafe.',
      type: 'image'
    },
    // Nature
    { 
      id: 3, 
      src: '/images/nature_sample_1763932980311.png', 
      alt: 'Forest Light', 
      category: 'Nature',
      title: 'Forest Rays',
      description: 'Early morning light piercing through the ancient forest.',
      type: 'image'
    },
    { 
      id: 4, 
      src: '/images/hero_landscape_1763932197224.png', 
      alt: 'Highlands', 
      category: 'Nature',
      title: 'Highland Mist',
      description: 'The rugged beauty of the Scottish Highlands.',
      type: 'image'
    },
    // Child Dedication
    { 
      id: 5, 
      src: '/images/child_sample_1763932954660.png', 
      alt: 'Innocence', 
      category: 'Child Dedication',
      title: 'Pure Innocence',
      description: 'A portrait capturing the wonder of childhood.',
      type: 'image'
    },
    // Portrait
    { 
      id: 6, 
      src: '/images/portrait_sample_1763932211246.png', 
      alt: 'Studio Portrait', 
      category: 'Portrait',
      title: 'The Artist',
      description: 'A dramatic studio portrait playing with shadow and light.',
      type: 'image'
    },
    // Architecture
    { 
      id: 7, 
      src: '/images/architecture_sample_1763932224263.png', 
      alt: 'Modern Lines', 
      category: 'Architecture',
      title: 'Urban Geometry',
      description: 'Exploring the geometric shapes of modern architecture.',
      type: 'image'
    },
    // Videos
    { 
      id: 8, 
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', 
      thumbnail: '/images/wedding_sample_1763932940737.png',
      alt: 'Wedding Film', 
      category: 'Wedding',
      title: 'Wedding Highlights',
      description: 'A cinematic highlight reel of the special day.',
      type: 'video'
    },
  ];


  const [displayItems, setDisplayItems] = useState<MediaItem[]>(allItems.slice(0, 6));
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const currentLength = displayItems.length;
      const moreItems = allItems.map(item => ({
        ...item,
        id: item.id + currentLength + Math.random() // Ensure unique IDs
      }));
      
      setDisplayItems(prev => [...prev, ...moreItems]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.main}>
      {/* Hero Section - Massive Typography */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroTextWrapper} ref={textRef}>
          <h1 className={`${styles.heroTitle} reveal`}>TheOkeJacobs</h1>
        </div>
        <div className={styles.heroImageContainer} ref={imageRef}>
           <Image 
             src="https://scontent-lhr6-1.cdninstagram.com/v/t51.2885-19/504455212_18066428606118494_7922568910431503881_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QFGh4fI2n4KOOLZhZ_0FfKfSdY_TdAWXVrqJCzOrkjNQIjPay8jOjpei-31dtlV6Wu6ERhn4aqAmTahXrc_Qcnk&_nc_ohc=0OJc7vJ4ibIQ7kNvwFWLX-W&_nc_gid=2pci6Z455SW6VffsAIdl8g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiqmuzpuzBqbWNJ3tLcI9W0jh_FcY0QHr8kjHzu4gthzg&oe=692947EF&_nc_sid=22de04" 
             alt="Hero" 
             fill
             priority
             quality={100}
             sizes="100vw"
             className={styles.heroImage}
           />
        </div>
      </section>

      {/* Intro Statement */}
      <section className={styles.intro}>
        <div className="container">
          <p className={`${styles.introText} reveal`}>
            Capturing the <span className={styles.highlight}>essence</span> of moments through a lens of timeless elegance.
          </p>
        </div>
      </section>

      {/* Portfolio - Full Width / Immersive */}
      <section className={styles.portfolioSection}>
        <div className="container">
           <div className={styles.sectionHeader}>
             <h2>Selected Works</h2>
             <div className={styles.line}></div>
           </div>
           <PhotoGrid items={displayItems} />
           <div className={styles.loadMoreWrapper}>
            <button 
              onClick={loadMore} 
              className={styles.loadMoreButton}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
           </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutContent}>
            <span className={styles.label}>The Photographer</span>
            <h2 className={styles.aboutTitle}>Behind the Lens</h2>
            <p className={styles.aboutText}>
              TheOkeJacobs is more than a name; it's a perspective. Based in the UK, we specialize in transforming the ordinary into the extraordinary. 
              Our approach is rooted in portrait, wedding, lifestyle, and fashion photography, stripping away the unnecessary to reveal the raw emotion and geometry of the subject.
            </p>
            <Link href="/contact" className={styles.ctaButton}>Start a Project</Link>
          </div>
          <div className={styles.aboutImageWrapper}>
           <Image 
             src="https://scontent-lhr6-1.cdninstagram.com/v/t51.2885-19/504455212_18066428606118494_7922568910431503881_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QFGh4fI2n4KOOLZhZ_0FfKfSdY_TdAWXVrqJCzOrkjNQIjPay8jOjpei-31dtlV6Wu6ERhn4aqAmTahXrc_Qcnk&_nc_ohc=0OJc7vJ4ibIQ7kNvwFWLX-W&_nc_gid=2pci6Z455SW6VffsAIdl8g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiqmuzpuzBqbWNJ3tLcI9W0jh_FcY0QHr8kjHzu4gthzg&oe=692947EF&_nc_sid=22de04" 
             alt="TheOkeJacobs" 
             fill
             className={styles.aboutImage}
             sizes="(max-width: 768px) 100vw, 50vw"
           />
        </div>
        </div>
      </section>
    </div>
  );
}
