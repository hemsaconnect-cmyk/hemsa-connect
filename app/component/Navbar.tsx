'use client';
import logo from '@/public/Hotel Hemsa Connect.png';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Amenities', href: '/amenities' },
    // { name: 'Reviews', href: '/testimonials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },

  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Hotel Hemsa Connect Logo"
              width={60}
              height={60}
              className="rounded-xl object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-extrabold text-blue-900 tracking-wide">
              Hotel Hemsa Connect
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium hover:text-blue-700 transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+919999999999"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-700"
            >
              <Phone size={16} /> Call Us
            </Link>
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 transition"
            >
              <CalendarCheck size={16} /> Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t space-y-3">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Phone size={16} /> Call Us
                </a>
                <a
                  href="/booking"
                  className="flex items-center justify-center gap-2 bg-blue-900 text-white px-4 py-3 rounded-xl"
                >
                  <CalendarCheck size={16} /> Book Your Stay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
