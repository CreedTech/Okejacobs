'use client';

import { useState } from 'react';
import PhotoGrid, { MediaItem } from '@/components/PhotoGrid';
import styles from './page.module.css';

export default function Gallery() {
  const [filter, setFilter] = useState('All');

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
      src: '/images/portrait_sample_1763932211246.png', // Reusing for demo
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

  const filteredItems = filter === 'All' 
    ? allItems 
    : allItems.filter(item => item.category === filter);

  const filters = ['All', 'Wedding', 'Lifestyle', 'Nature', 'Child Dedication', 'Portrait', 'Architecture'];

  return (
    <div className={`container ${styles.gallery}`}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button 
            key={f} 
            className={`${styles.filter} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <PhotoGrid items={filteredItems} />
    </div>
  );
}
