'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import PhotoGrid, { MediaItem } from '@/components/PhotoGrid';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allItems } from '@/lib/imageData';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ITEMS_PER_PAGE = 6;

  const [displayItems, setDisplayItems] = useState<MediaItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    setDisplayItems(allItems.slice(0, ITEMS_PER_PAGE));
    setHasMore(allItems.length > ITEMS_PER_PAGE);
  }, []);
  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax - optimized
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Add smoothing
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

      // Services Cards
      gsap.fromTo(
        '.service-card',
        { y: 100, opacity: 0, scale: 0.9 },
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
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials
      gsap.fromTo(
        '.testimonial-card',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
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
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    // Simulate async loading (replace with real API call if needed)
    // setTimeout(() => {
    const nextPage = currentPage + 1;
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newItems = allItems.slice(startIndex, endIndex);

    if (newItems.length > 0) {
      setDisplayItems((prev) => [...prev, ...newItems]);
      setCurrentPage(nextPage);
    }

    // Check if there are more items
    setHasMore(endIndex < allItems.length);
    setLoading(false);
    // }, 300);
  }, [currentPage, loading, hasMore]);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Hero Parallax
  //     gsap.to(imageRef.current, {
  //       yPercent: 30,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: heroRef.current,
  //         start: 'top top',
  //         end: 'bottom top',
  //         scrub: true,
  //       },
  //     });

  //     // Text Reveal
  //     gsap.fromTo(
  //       '.reveal',
  //       { y: 100, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         stagger: 0.1,
  //         ease: 'power4.out',
  //       }
  //     );

  //     // Services Cards Animation
  //     gsap.fromTo(
  //       '.service-card',
  //       {
  //         y: 100,
  //         opacity: 0,
  //         scale: 0.9,
  //       },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         scale: 1,
  //         duration: 1,
  //         stagger: 0.2,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: servicesRef.current,
  //           start: 'top 80%',
  //           end: 'bottom 20%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );

  //     // Testimonials Animation
  //     gsap.fromTo(
  //       '.testimonial-card',
  //       {
  //         x: -50,
  //         opacity: 0,
  //         rotateY: -15,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         rotateY: 0,
  //         duration: 1.2,
  //         stagger: 0.15,
  //         ease: 'power3.out',
  //         scrollTrigger: {
  //           trigger: testimonialsRef.current,
  //           start: 'top 75%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       }
  //     );
  //   }, heroRef);

  //   return () => ctx.revert();
  // }, []);

  // const [displayItems, setDisplayItems] = useState<MediaItem[]>(
  //   allItems.slice(0, 6)
  // );
  // const [loading, setLoading] = useState(false);

  // const loadMore = () => {
  //   if (loading) return;
  //   setLoading(true);

  //   // Simulate network delay
  //   setTimeout(() => {
  //     const currentLength = displayItems.length;
  //     const moreItems = allItems.map((item) => ({
  //       ...item,
  //       id: item.id + currentLength + Math.random(), // Ensure unique IDs
  //     }));

  //     setDisplayItems((prev) => [...prev, ...moreItems]);
  //     setLoading(false);
  //   }, 500);
  // };

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
            src="/images/DSC_0230.JPG"
            alt="Hero"
            fill
            priority
            quality={100}
            sizes="100vw"
            placeholder="blur"
            className={styles.heroImage}
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
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
          {hasMore && (
            <div className={styles.loadMoreWrapper}>
              <button
                onClick={loadMore}
                className={styles.loadMoreButton}
                disabled={loading}
                aria-label="Load more images"
              >
                {loading ? (
                  <>
                    <span className={styles.spinner}></span>
                    Loading...
                  </>
                ) : (
                  'Load More'
                )}
              </button>
              <p className={styles.loadMoreInfo}>
                Showing {displayItems.length} of {allItems.length} images
              </p>
            </div>
          )}
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
              src="/images/DSC_0230.JPG"
              alt="TheOkeJacobs"
              fill
              quality={80} // Reduced
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy" // Lazy load
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
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
