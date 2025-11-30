import { Metadata } from 'next';
import styles from './page.module.css';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Book TheOkeJacobs for your wedding, portrait session, or event. Serving London, Birmingham, Manchester & all UK. Get a quote today for professional photography services.',
  openGraph: {
    title: 'Contact TheOkeJacobs | Book Your Photography Session',
    description:
      'Get in touch to discuss your photography needs. Professional service across all UK.',
  },
};
export default function Contact() {
  return <ContactClient />;
}
