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
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

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

      // Services Cards Animation
      gsap.fromTo(
        '.service-card',
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials Animation
      gsap.fromTo(
        '.testimonial-card',
        {
          x: -50,
          opacity: 0,
          rotateY: -15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const allItems: MediaItem[] = [
    // Wedding Photos
    {
      id: 1,
      src: '/images/wed/DSC_9212.jpg',
      alt: 'Wedding Ceremony',
      category: 'Wedding',
      title: 'Sacred Vows',
      description: 'Capturing the beautiful moment of commitment.',
      type: 'image',
    },
    {
      id: 2,
      src: '/images/wed/DSC_9242.jpg',
      alt: 'Wedding Celebration',
      category: 'Wedding',
      title: 'Joyful Celebration',
      description: 'The happiness of two families coming together.',
      type: 'image',
    },
    {
      id: 3,
      src: '/images/wed/DSC_9266.jpg',
      alt: 'Wedding Couple',
      category: 'Wedding',
      title: 'Eternal Love',
      description: 'A timeless portrait of the newlyweds.',
      type: 'image',
    },
    {
      id: 4,
      src: '/images/wed/IMG_8321 copy.jpg',
      alt: 'Wedding Details',
      category: 'Wedding',
      title: 'Perfect Details',
      description: 'Every detail tells a story.',
      type: 'image',
    },
    {
      id: 5,
      src: '/images/wed/IMG_9847.jpg',
      alt: 'Wedding Reception',
      category: 'Wedding',
      title: 'Grand Reception',
      description: 'Celebrating love with family and friends.',
      type: 'image',
    },
    {
      id: 6,
      src: '/images/wed/JAH_5768.jpg',
      alt: 'Wedding Moments',
      category: 'Wedding',
      title: 'Precious Moments',
      description: 'Candid moments of pure joy.',
      type: 'image',
    },
    {
      id: 7,
      src: '/images/wed/opulence.jpg',
      alt: 'Luxury Wedding',
      category: 'Wedding',
      title: 'Opulent Affair',
      description: 'Elegance and sophistication.',
      type: 'image',
    },
    {
      id: 8,
      src: '/images/wed/valentine8.jpg',
      alt: 'Romantic Wedding',
      category: 'Wedding',
      title: 'Romance in the Air',
      description: 'Love captured in every frame.',
      type: 'image',
    },

    // Portrait Photos
    {
      id: 9,
      src: '/images/portrait/JADE.jpg',
      alt: 'Portrait Session',
      category: 'Portrait',
      title: 'Jade',
      description: 'A stunning portrait session.',
      type: 'image',
    },
    {
      id: 10,
      src: '/images/portrait/mide.jpg',
      alt: 'Professional Portrait',
      category: 'Portrait',
      title: 'Professional Elegance',
      description: 'Capturing confidence and style.',
      type: 'image',
    },
    {
      id: 11,
      src: '/images/portrait/IMG_9176.jpg',
      alt: 'Creative Portrait',
      category: 'Portrait',
      title: 'Creative Expression',
      description: 'Artistic portrait photography.',
      type: 'image',
    },
    {
      id: 12,
      src: '/images/portrait/DSC_0107.jpg',
      alt: 'Studio Portrait',
      category: 'Portrait',
      title: 'Studio Session',
      description: 'Professional studio photography.',
      type: 'image',
    },
    {
      id: 13,
      src: '/images/portrait/IMG_9375.jpg',
      alt: 'Outdoor Portrait',
      category: 'Portrait',
      title: 'Natural Light',
      description: 'Beautiful outdoor portrait.',
      type: 'image',
    },
    {
      id: 14,
      src: '/images/portrait/portrait-maestros.jpg',
      alt: 'Portrait Maestro',
      category: 'Portrait',
      title: 'Portrait Maestro',
      description: 'Mastery in portrait photography.',
      type: 'image',
    },
    {
      id: 15,
      src: '/images/portrait/MNYL7553.jpg',
      alt: 'Elegant Portrait',
      category: 'Portrait',
      title: 'Timeless Elegance',
      description: 'Classic portrait photography.',
      type: 'image',
    },
    {
      id: 16,
      src: '/images/portrait/IMG_4537.jpg',
      alt: 'Character Portrait',
      category: 'Portrait',
      title: 'Character Study',
      description: 'Capturing personality and character.',
      type: 'image',
    },

    // Lifestyle Photos
    {
      id: 17,
      src: '/images/lifestyle/kiki2.jpg',
      alt: 'Lifestyle Shoot',
      category: 'Lifestyle',
      title: 'Lifestyle Moments',
      description: 'Authentic lifestyle photography.',
      type: 'image',
    },
    {
      id: 18,
      src: '/images/lifestyle/IMG_9469-Recovered.jpg',
      alt: 'Candid Lifestyle',
      category: 'Lifestyle',
      title: 'Candid Moments',
      description: 'Natural and spontaneous.',
      type: 'image',
    },
    {
      id: 19,
      src: '/images/lifestyle/magazine1.jpg',
      alt: 'Editorial Lifestyle',
      category: 'Lifestyle',
      title: 'Editorial Style',
      description: 'Magazine-worthy lifestyle shots.',
      type: 'image',
    },
    {
      id: 20,
      src: '/images/lifestyle/mutiple.jpg',
      alt: 'Group Lifestyle',
      category: 'Lifestyle',
      title: 'Together',
      description: 'Capturing connections and relationships.',
      type: 'image',
    },
    {
      id: 21,
      src: '/images/lifestyle/IMG_9556.jpg',
      alt: 'Urban Lifestyle',
      category: 'Lifestyle',
      title: 'Urban Life',
      description: 'City lifestyle photography.',
      type: 'image',
    },
    {
      id: 22,
      src: '/images/lifestyle/2.jpg',
      alt: 'Lifestyle Portrait',
      category: 'Lifestyle',
      title: 'Lifestyle Portrait',
      description: 'Blending portrait and lifestyle.',
      type: 'image',
    },

    // Fashion Photos
    {
      id: 23,
      src: '/images/fashion/DSC_0011.jpg',
      alt: 'Fashion Editorial',
      category: 'Fashion',
      title: 'Fashion Forward',
      description: 'High-fashion editorial photography.',
      type: 'image',
    },
    {
      id: 24,
      src: '/images/fashion/DSC_0036.jpg11.jpg',
      alt: 'Fashion Shoot',
      category: 'Fashion',
      title: 'Style Statement',
      description: 'Bold fashion photography.',
      type: 'image',
    },
    {
      id: 25,
      src: '/images/fashion/DSC_0073.jpg',
      alt: 'Fashion Model',
      category: 'Fashion',
      title: 'Model Portfolio',
      description: 'Professional fashion modeling.',
      type: 'image',
    },
    {
      id: 26,
      src: '/images/fashion/DSC_0077.jpg',
      alt: 'Fashion Photography',
      category: 'Fashion',
      title: 'Haute Couture',
      description: 'Elegant fashion photography.',
      type: 'image',
    },
    {
      id: 27,
      src: '/images/fashion/DSC_0082.jpg',
      alt: 'Fashion Portrait',
      category: 'Fashion',
      title: 'Fashion Portrait',
      description: 'Stylish and sophisticated.',
      type: 'image',
    },
    {
      id: 28,
      src: '/images/fashion/DSC_0004.jpg',
      alt: 'Fashion Art',
      category: 'Fashion',
      title: 'Artistic Fashion',
      description: 'Where fashion meets art.',
      type: 'image',
    },
  ];

  const [displayItems, setDisplayItems] = useState<MediaItem[]>(
    allItems.slice(0, 6)
  );
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return;
    setLoading(true);

    // Simulate network delay
    setTimeout(() => {
      const currentLength = displayItems.length;
      const moreItems = allItems.map((item) => ({
        ...item,
        id: item.id + currentLength + Math.random(), // Ensure unique IDs
      }));

      setDisplayItems((prev) => [...prev, ...moreItems]);
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.main}>
      {/* Hero Section - Massive Typography */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroTextWrapper} ref={textRef}>
          <h1 className={`${styles.heroTitle} reveal`}>TheOkeJacobs</h1>
          <p className={`${styles.heroSubtitle} reveal`}>
            Award-Winning Nigerian Photographer | UK Based
          </p>
          <p className={`${styles.heroTagline} reveal`}>
            Blending African Storytelling with British Elegance
          </p>
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
        <div className={styles.heroOverlay}>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>500+</span>
              <span className={styles.heroStatLabel}>Memories Captured</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>10+</span>
              <span className={styles.heroStatLabel}>Years Experience</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>★★★★★</span>
              <span className={styles.heroStatLabel}>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className={styles.intro}>
        <div className="container">
          <p className={`${styles.introText} reveal`}>
            From <span className={styles.highlight}>Lagos to London</span>, I
            bring a unique perspective to every frame. Specializing in{' '}
            <span className={styles.highlight}>weddings</span>,{' '}
            <span className={styles.highlight}>portraits</span>, and{' '}
            <span className={styles.highlight}>lifestyle photography</span> that
            celebrates culture, emotion, and timeless moments.
          </p>
          {/* <div className={styles.urgencyBanner}>
            <span className={styles.urgencyIcon}>⚡</span>
            <p className={styles.urgencyText}>
              Limited Availability for 2025 | Only 12 Wedding Slots Remaining
            </p>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      {/* <section className={styles.servicesSection} ref={servicesRef}>
        <div className="container">
          <div className={styles.servicesSectionHeader}>
            <span className={styles.servicesLabel}>Services</span>
            <h2 className={styles.servicesMainTitle}>What I Offer</h2>
            <p className={styles.servicesSubtitle}>
              Premium photography services tailored to celebrate your most
              precious moments
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={`${styles.serviceCard} service-card`}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrapper}>
                    <span className={styles.serviceIcon}>💍</span>
                  </div>
                  <div className={styles.serviceBadge}>Most Popular</div>
                </div>
                <h3 className={styles.serviceTitle}>Wedding Photography</h3>
                <p className={styles.serviceDescription}>
                  Full-day coverage capturing every precious moment from
                  preparation to reception. Specializing in Nigerian, African,
                  and multicultural weddings across the UK.
                </p>
                <div className={styles.serviceFeaturesWrapper}>
                  <ul className={styles.serviceFeatures}>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      8-12 hours coverage
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      500+ edited high-resolution images
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Online gallery & USB delivery
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Second shooter available
                    </li>
                  </ul>
                </div>
                <div className={styles.serviceFooter}>
                  <div className={styles.servicePriceWrapper}>
                    <span className={styles.servicePriceLabel}>
                      Starting from
                    </span>
                    <span className={styles.servicePrice}>£1,500</span>
                  </div>
                  <Link href="/contact" className={styles.serviceButton}>
                    Book Now
                    <svg
                      className={styles.buttonArrow}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${styles.serviceCard} service-card`}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrapper}>
                    <span className={styles.serviceIcon}>👤</span>
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>Portrait Sessions</h3>
                <p className={styles.serviceDescription}>
                  Professional headshots, family portraits, and personal
                  branding photography. Perfect for professionals, creatives,
                  and families wanting timeless memories.
                </p>
                <div className={styles.serviceFeaturesWrapper}>
                  <ul className={styles.serviceFeatures}>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      1-2 hour session
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Multiple outfit changes
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      50+ edited images
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Studio or outdoor location
                    </li>
                  </ul>
                </div>
                <div className={styles.serviceFooter}>
                  <div className={styles.servicePriceWrapper}>
                    <span className={styles.servicePriceLabel}>
                      Starting from
                    </span>
                    <span className={styles.servicePrice}>£250</span>
                  </div>
                  <Link href="/contact" className={styles.serviceButton}>
                    Book Now
                    <svg
                      className={styles.buttonArrow}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${styles.serviceCard} service-card`}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrapper}>
                    <span className={styles.serviceIcon}>👶</span>
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>
                  Child Dedication & Naming
                </h3>
                <p className={styles.serviceDescription}>
                  Celebrate your child's special day with beautiful photography
                  that honors tradition and captures the joy of family coming
                  together.
                </p>
                <div className={styles.serviceFeaturesWrapper}>
                  <ul className={styles.serviceFeatures}>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      4-6 hours coverage
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      200+ edited images
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Family group photos
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Cultural ceremony documentation
                    </li>
                  </ul>
                </div>
                <div className={styles.serviceFooter}>
                  <div className={styles.servicePriceWrapper}>
                    <span className={styles.servicePriceLabel}>
                      Starting from
                    </span>
                    <span className={styles.servicePrice}>£600</span>
                  </div>
                  <Link href="/contact" className={styles.serviceButton}>
                    Book Now
                    <svg
                      className={styles.buttonArrow}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className={`${styles.serviceCard} service-card`}>
              <div className={styles.serviceCardInner}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIconWrapper}>
                    <span className={styles.serviceIcon}>🎨</span>
                  </div>
                </div>
                <h3 className={styles.serviceTitle}>Lifestyle & Events</h3>
                <p className={styles.serviceDescription}>
                  Corporate events, birthday parties, anniversaries, and
                  lifestyle shoots. Authentic moments captured with artistic
                  flair.
                </p>
                <div className={styles.serviceFeaturesWrapper}>
                  <ul className={styles.serviceFeatures}>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Flexible coverage options
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Event documentation
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Candid & posed shots
                    </li>
                    <li>
                      <svg
                        className={styles.checkIcon}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Quick turnaround available
                    </li>
                  </ul>
                </div>
                <div className={styles.serviceFooter}>
                  <div className={styles.servicePriceWrapper}>
                    <span className={styles.servicePriceLabel}>
                      Starting from
                    </span>
                    <span className={styles.servicePrice}>£400</span>
                  </div>
                  <Link href="/contact" className={styles.serviceButton}>
                    Book Now
                    <svg
                      className={styles.buttonArrow}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
              Born in Nigeria, based in the UK, I bring the warmth of African
              storytelling to every shoot. With over a decade of experience,
              I've had the privilege of documenting love stories, cultural
              celebrations, and life's most precious moments across London,
              Manchester, Birmingham, and beyond.
            </p>
            <p className={styles.aboutText}>
              My photography style blends documentary authenticity with
              editorial elegance. Whether it's a traditional Nigerian wedding, a
              modern British ceremony, or a fusion of both cultures, I
              understand the nuances that make each celebration unique. I don't
              just take photos, I preserve legacies.
            </p>
            <p className={styles.aboutText}>
              <strong>Why clients choose me:</strong> Cultural sensitivity,
              attention to detail, and a genuine passion for celebrating
              diversity. I speak Yoruba and understand the importance of
              capturing those special cultural moments that matter most to you
              and your family.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start a Project
            </Link>
          </div>
          <div className={styles.aboutImageWrapper}>
            <Image
              src="https://scontent-lhr6-1.cdninstagram.com/v/t51.2885-19/504455212_18066428606118494_7922568910431503881_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMxIn0&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_cat=102&_nc_oc=Q6cZ2QFGh4fI2n4KOOLZhZ_0FfKfSdY_TdAWXVrqJCzOrkjNQIjPay8jOjpei-31dtlV6Wu6ERhn4aqAmTahXrc_Qcnk&_nc_ohc=0OJc7vJ4ibIQ7kNvwFWLX-W&_nc_gid=2pci6Z455SW6VffsAId8g&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfiqmuzpuzBqbWNJ3tLcI9W0jh_FcY0QHr8kjHzu4gthzg&oe=692947EF&_nc_sid=22de04"
              alt="TheOkeJacobs"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} ref={testimonialsRef}>
        <div className="container">
          <div className={styles.testimonialsSectionHeader}>
            <span className={styles.testimonialsLabel}>Testimonials</span>
            <h2 className={styles.testimonialsMainTitle}>What Clients Say</h2>
            <p className={styles.testimonialsSubtitle}>
              Real stories from real clients who trusted me with their special
              moments
            </p>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={`${styles.testimonialCard} testimonial-card`}>
              <div className={styles.testimonialCardInner}>
                <div className={styles.quoteIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={styles.starIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.testimonialText}>
                  "TheOkeJacobs captured our Nigerian wedding beautifully! He
                  understood every cultural detail and made our families feel so
                  comfortable. The photos are absolutely stunning and we'll
                  treasure them forever!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <span>CD</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>Joachim & Wife</p>
                    <p className={styles.authorLocation}>Abeokuta, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.testimonialCard} testimonial-card`}>
              <div className={styles.testimonialCardInner}>
                <div className={styles.quoteIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={styles.starIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.testimonialText}>
                  "Professional, creative, and so easy to work with. Our family
                  portraits turned out better than we could have imagined. The
                  attention to detail and cultural sensitivity was remarkable.
                  Highly recommend!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <span>AF</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>The Adeyemi Family</p>
                    <p className={styles.authorLocation}>London, UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.testimonialCard} testimonial-card`}>
              <div className={styles.testimonialCardInner}>
                <div className={styles.quoteIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={styles.starIcon}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={styles.testimonialText}>
                  "From our child's naming ceremony to our anniversary shoot,
                  TheOkeJacobs has documented every major milestone in our
                  lives. The quality and artistry are unmatched. Wouldn't trust
                  anyone else!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    <span>FT</span>
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>GLC Global</p>
                    <p className={styles.authorLocation}>Abeokuta, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
