import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Portfolio Gallery',
  description: 'Browse  stunning images across weddings, portraits, lifestyle & fashion photography.',
  openGraph: {
    title: 'Photography Portfolio | TheOkeJacobs',
    images: ['/images/wed/DSC_9212.jpg'],
  },
};

export default function Gallery() {
  return <GalleryClient />;
}