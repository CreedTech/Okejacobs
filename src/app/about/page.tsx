
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About TheOkeJacobs',
  description: 'From Lagos to London: Learn about TheOkeJacobs, award-winning Nigerian photographer with 10+ years experience. Cultural sensitivity, Yoruba fluency, and artistic excellence in every shot.',
  openGraph: {
    title: 'About TheOkeJacobs | Nigerian Photographer UK',
    description: 'Professional photographer specializing in Nigerian and African weddings. 500+ weddings captured, trusted by communities across UK.',
    images: ['/images/DSC_0230.JPG'],
  },
};

export default function About() {
  return (
   <AboutClient/>
  );
}
