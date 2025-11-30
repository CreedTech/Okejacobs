'use client';

import { useState, useEffect, useCallback } from 'react';
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

export default function PhotoGrid({ items }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState<MediaItem[][]>([[], [], []]);

  // Distribute items into columns
  useEffect(() => {
    const newColumns: MediaItem[][] = [[], [], []];
    const colCount = window.innerWidth <= 600 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
    
    // Reset columns based on screen size
    const finalColumns = Array.from({ length: colCount }, () => [] as MediaItem[]);

    items.forEach((item, index) => {
      finalColumns[index % colCount].push(item);
    });

    setColumns(finalColumns);

    const handleResize = () => {
       const newColCount = window.innerWidth <= 600 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
       if (newColCount !== finalColumns.length) {
         // Re-distribute if column count changes
         const resizedColumns = Array.from({ length: newColCount }, () => [] as MediaItem[]);
         items.forEach((item, index) => {
           resizedColumns[index % newColCount].push(item);
         });
         setColumns(resizedColumns);
       }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < items.length - 1 ? prev + 1 : 0));
  }, [items.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : items.length - 1));
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
            {col.map((item, itemIndex) => (
              <div 
                key={item.id} 
                className={`${styles.item} fade-in`} 
                style={{ animationDelay: `${itemIndex * 0.1}s` }}
                onClick={() => setSelectedIndex(items.findIndex(i => i.id === item.id))}
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
            ))}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.lightbox} onClick={() => setSelectedIndex(null)}>
          <button className={styles.navButton} style={{left: '20px'}} onClick={handlePrev}>‹</button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className={styles.videoWrapper}>
                 <video 
                   src={selectedItem.src} 
                   controls 
                   autoPlay 
                   className={styles.videoPlayer}
                   style={{ maxWidth: '100%', maxHeight: '80vh' }}
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
              />
            )}
            <div className={styles.info}>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.description}</p>
            </div>
            <button className={styles.closeButton} onClick={() => setSelectedIndex(null)}>×</button>
          </div>

          <button className={styles.navButton} style={{right: '20px'}} onClick={handleNext}>›</button>
        </div>
      )}
    </>
  );
}
