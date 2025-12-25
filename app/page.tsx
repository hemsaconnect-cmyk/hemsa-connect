// app/page.tsx
'use client';

import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import RoomsSection from './component/RoomsSection';
import AmenitiesSection from './component/AmenitiesSection';
import TestimonialsSection from './component/TestimonialsSection';
import ContactSection from './component/ContactSection';
import Footer from './component/Footer';

export default function HotelHemsaConnect() {


  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <RoomsSection />
        <AmenitiesSection />
        <TestimonialsSection  />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
} 
