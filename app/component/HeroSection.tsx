'use client';

import { Star, CalendarCheck, Bath, Sparkles, ShieldCheck, BedDouble, Wifi } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff33,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
              <Star size={16} className="text-yellow-400" />
              Rated 4.8 by 2,000+ Guests
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Welcome to <span className="text-blue-300">Hotel Hemsa</span> Connect
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mb-8">
             Hotel Hemsa Connect offers luxury private Jacuzzi rooms in Udaipur for guests seeking privacy, comfort, and a premium stay experience. Located near Udaipur Railway Station, our hotel is a preferred choice for couples, honeymooners, and travelers looking for a romantic hotel with Jacuzzi in Udaipur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-blue-50 transition"
              >
                <CalendarCheck size={18} /> Book Your Stay
              </a>
              <a
                href="/rooms"
                className="inline-flex items-center justify-center gap-2 border border-white/60 px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-900 transition"
              >
                Explore Rooms
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-blue-100">
              <div>
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-sm">Luxury Rooms</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm">Service</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Prime</p>
                <p className="text-sm">City Location</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Our Jacuzzi Rooms?</h3>
              <p className="text-sm text-blue-200 mb-6">
                Crafted for a premium experience with a focus on privacy, luxury, and couple-friendly comfort.
              </p>
              <ul className="space-y-3 text-blue-100 text-sm">
                <li className="flex items-start gap-3">
                  <Bath size={18} className="text-blue-300 mt-0.5 flex-shrink-0" /> Private Jacuzzi with hot water
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles size={18} className="text-yellow-400 mt-0.5 flex-shrink-0" /> Romantic lighting & elegant interiors
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-green-400 mt-0.5 flex-shrink-0" /> Soundproof rooms for complete privacy
                </li>
                <li className="flex items-start gap-3">
                  <BedDouble size={18} className="text-purple-400 mt-0.5 flex-shrink-0" /> King-size bed with premium mattress
                </li>
                <li className="flex items-start gap-3">
                  <Wifi size={18} className="text-sky-400 mt-0.5 flex-shrink-0" /> High-speed WiFi and Smart TV
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
