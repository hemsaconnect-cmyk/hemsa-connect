import {
  LucideProps,
  Wifi,
  Utensils,
  Coffee,
  Car,
  Bath,
  BedDouble,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Amenity {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  name: string;
  desc: string;
}

export default function AmenitiesSection() {
  const amenities: Amenity[] = [
    {
      icon: Bath,
      name: "Private Jacuzzi",
      desc: "Luxury in-room Jacuzzi experience for couples seeking privacy and relaxation."
    },
    {
      icon: BedDouble,
      name: "Premium Bedding",
      desc: "King-size beds with premium mattresses for a comfortable and peaceful sleep."
    },
    {
      icon: Wifi,
      name: "High-Speed WiFi",
      desc: "Fast and reliable internet access in all rooms and common areas."
    },
    {
      icon: ShieldCheck,
      name: "Couple Friendly",
      desc: "Safe, secure and couple-friendly hotel with privacy assured."
    },
    {
      icon: Utensils,
      name: "In-Room Dining",
      desc: "Delicious multi-cuisine meals served directly to your room."
    },
    {
      icon: Coffee,
      name: "Tea & Coffee Setup",
      desc: "Complimentary tea and coffee maker available in every room."
    },
    {
      icon: Car,
      name: "Free Parking",
      desc: "Complimentary parking facility for all hotel guests."
    },
    {
      icon: Clock,
      name: "24/7 Front Desk",
      desc: "Round-the-clock assistance for check-in, room service and travel help."
    },
    {
      icon: MapPin,
      name: "Prime Location",
      desc: "Located near Udaipur Railway Station with easy city access."
    },
    {
      icon: Sparkles,
      name: "Daily Housekeeping",
      desc: "Clean, hygienic rooms with daily housekeeping and sanitization."
    }
  ];

  return (
    <section
      id="amenities"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-whit mb-4">
            Premium Amenities at Hotel Hemsa Connect
          </h2>
          <p className="text-lg text-white-900 max-w-3xl mx-auto">
            Enjoy luxury amenities including private Jacuzzi rooms, couple-friendly stays
            and modern comforts designed for a memorable experience in Udaipur.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {amenities.map((amenity, idx) => {
            const Icon = amenity.icon;
            return (
              <div
                key={idx}
                className="group text-center p-8 rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-900 transition">
                  <Icon size={30} className="text-blue-800 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {amenity.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
