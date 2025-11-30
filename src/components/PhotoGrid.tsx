'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import styles from './PhotoGrid.module.css';

export interface MediaItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

interface PhotoGridProps {
  items: MediaItem[];
}

// Shimmer effect for loading placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function PhotoGrid({ items }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [colCount, setColCount] = useState(3);

  // Determine column count based on screen size
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      const newColCount = width <= 600 ? 1 : width <= 1024 ? 2 : 3;
      setColCount(newColCount);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Memoize column distribution - only recalculate when items or colCount changes
  const columns = useMemo(() => {
    const cols: MediaItem[][] = Array.from({ length: colCount }, () => []);
    items.forEach((item, index) => {
      cols[index % colCount].push(item);
    });
    return cols;
  }, [items, colCount]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => 
      prev !== null && prev < items.length - 1 ? prev + 1 : 0
    );
  }, [items.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => 
      prev !== null && prev > 0 ? prev - 1 : items.length - 1
    );
  }, [items.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'Escape') setSelectedIndex(null);
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex, handleKeyDown]);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <>
      <div className={styles.masonryGrid}>
        {columns.map((col, colIndex) => (
          <div key={colIndex} className={styles.masonryColumn}>
            {col.map((item, itemIndex) => {
              // Calculate global index for lazy loading priority
              const globalIndex = items.findIndex(i => i.id === item.id);
              const isAboveFold = globalIndex < 6; // First 6 images

              return (
                <div 
                  key={item.id} 
                  className={`${styles.item} fade-in`} 
                  style={{ animationDelay: `${itemIndex * 0.1}s` }}
                  onClick={() => setSelectedIndex(globalIndex)}
                >
                  <div className={styles.imageWrapper}>
                    {item.type === 'video' ? (
                      <div className={styles.videoThumbnail}>
                        <div className={styles.playIcon}>▶</div>
                        <Image
                          src={item.thumbnail || '/images/wedding_sample_1763932940737.png'}
                          alt={item.alt}
                          width={600}
                          height={800}
                          className={styles.image}
                          style={{ objectFit: 'cover' }}
                          loading={isAboveFold ? 'eager' : 'lazy'}
                          quality={75}
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 800))}`}
                          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={800}
                        className={styles.image}
                        style={{ objectFit: 'cover' }}
                        loading={isAboveFold ? 'eager' : 'lazy'}
                        priority={isAboveFold}
                        quality={75}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 800))}`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className={styles.overlay}>
                      <div className={styles.overlayContent}>
                        <span className={styles.category}>{item.category}</span>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.lightbox} onClick={() => setSelectedIndex(null)}>
          <button 
            className={styles.navButton} 
            style={{left: '20px'}} 
            onClick={handlePrev}
            aria-label="Previous image"
          >
            ‹
          </button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className={styles.videoWrapper}>
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay 
                  className={styles.videoPlayer}
                  style={{ maxWidth: '100%', maxHeight: '80vh' }}
                  preload="metadata"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                width={1200}
                height={1600}
                className={styles.lightboxImage}
                style={{ objectFit: 'contain', maxHeight: '80vh' }}
                quality={90}
                priority
                sizes="90vw"
              />
            )}
            <div className={styles.info}>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </div>

          <button 
            className={styles.navButton} 
            style={{right: '20px'}} 
            onClick={handleNext}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}