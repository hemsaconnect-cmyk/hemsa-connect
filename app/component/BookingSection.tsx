'use client';

import { CalendarCheck, User, Phone, Mail, BedDouble } from 'lucide-react';

export default function BookingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Book Your Stay
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Reserve your room at Hotel Hemsa Connect and enjoy a private,
            comfortable, and premium stay experience in Udaipur.
          </p><br />

        </div>

        {/* Booking Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10" >
          <form className="grid sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Full Name
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <User size={18} className="text-blue-300" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-blue-300"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Phone Number
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <Phone size={18} className="text-blue-300" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-blue-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Email Address
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <Mail size={18} className="text-blue-300" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white placeholder-blue-300"
                />
              </div>
            </div>

            {/* Room Type */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Room Type
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <BedDouble size={18} className="text-blue-300" />
                <select
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                >
                  <option className="text-black">Jacuzzi Room</option>
                  <option className="text-black">Deluxe Room</option>
                </select>
              </div>
            </div>

            {/* Check-in */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Check-in Date
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <CalendarCheck size={18} className="text-blue-300" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* Check-out */}
            <div>
              <label className="text-sm text-blue-200 mb-2 block">
                Check-out Date
              </label>
              <div className="flex items-center bg-white/10 rounded-xl px-4">
                <CalendarCheck size={18} className="text-blue-300" />
                <input
                  type="date"
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="text-sm text-blue-200 mb-2 block">
                Special Requests (optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any special request for your stay..."
                className="w-full bg-white/10 rounded-xl p-4 outline-none text-white placeholder-blue-300"
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-12 py-4 rounded-2xl font-semibold shadow-xl hover:bg-blue-50 transition"
              >
                <CalendarCheck size={18} />
                Confirm Booking
              </button>

              <p className="text-xs text-blue-300 mt-4">
                Our team will contact you shortly to confirm your booking.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


