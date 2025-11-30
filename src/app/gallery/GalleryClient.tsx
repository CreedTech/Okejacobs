'use client';

import { useState, useMemo } from 'react';
import PhotoGrid, { MediaItem } from '@/components/PhotoGrid';
import styles from './page.module.css';
import { allItems } from '@/lib/imageData';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  // Get unique categories from data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(allItems.map((item) => item.category))
    );
    return ['All', ...uniqueCategories.sort()];
  }, []);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    return filter === 'All'
      ? allItems
      : allItems.filter((item) => item.category === filter);
  }, [filter]);

  // Get count for each category
  const getCategoryCount = (category: string) => {
    if (category === 'All') return allItems.length;
    return allItems.filter((item) => item.category === category).length;
  };

  return (
    <div className={`container ${styles.gallery}`}>
      <h1 className={styles.title}>Portfolio</h1>

      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filter} ${
              filter === category ? styles.active : ''
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
            <span className={styles.count}>({getCategoryCount(category)})</span>
          </button>
        ))}
      </div>

      <PhotoGrid items={filteredItems} />
    </div>
  );
}
