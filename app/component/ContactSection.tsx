import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-blue-600 mr-3 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Main Street, Delhi, India 110001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-blue-600 mr-3 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-blue-600 mr-3 mt-1" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@hotelhemsaconnect.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}