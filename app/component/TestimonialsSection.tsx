import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

interface Testimonial {
  name: string;
  rating: number;
  text: string
}

export default function TestimonialsSection() {

  
  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent service and beautiful rooms. The staff was incredibly helpful!'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Great location and amazing hospitality. Highly recommend!'
    },
    {
      name: 'Anita Desai',
      rating: 5,
      text: 'Clean, comfortable, and well-maintained. Perfect for business travel.'
    }
  ];
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Guest Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}