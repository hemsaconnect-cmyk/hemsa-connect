import Image from "next/image";

interface Room {
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  
}

export default function RoomsSection() {
  const rooms: Room[] = [
    {
      name: 'Luxury Jacuzzi Room',
      price: '₹6,999',
      image: '/room with jacuzzi.jpeg',
      description:
        'Private luxury Jacuzzi room designed for couples seeking comfort, privacy and a romantic stay in Udaipur.',
      features: [
        'Private Jacuzzi',
        'King Size Bed',
        'Couple Friendly',
        'High Speed WiFi',
        'Smart TV'
      ]
    },
    {
      name: 'Premium Deluxe Room',
      price: '₹4,999',
      image: '/deluxe room .jpeg',
      description:
        'Modern deluxe room with elegant interiors, perfect for business travelers and leisure guests.',
      features: [
        'King Size Bed',
        'Air Conditioning',
        'Free WiFi',
        'LED TV',
        'Room Service'
      ]
    },
    {
      name: 'Executive Comfort Room',
      price: '₹3,999',
      image: '/buildinghemsa.jpeg',
      description:
        'Comfortable and affordable room near Udaipur Railway Station with all essential amenities.',
      features: [
        'Near Railway Station',
        'Queen Size Bed',
        'Free WiFi',
        'AC',
        'Attached Bathroom'
      ]
    }
  ];

  return (
    <section
      id="rooms"
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white-900 mb-4">
            Luxury Rooms at Hotel Hemsa Connect
          </h2>
          <p className="text-lg text-white-600 max-w-2xl mx-auto">
            Experience premium comfort, private Jacuzzi rooms and a couple-friendly stay near Udaipur Railway Station.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-emerald-950 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image / Banner */}
              <div className="relative h-56">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 z-10 bg-white text-blue-900 text-sm font-semibold px-4 py-1 rounded-full">
                  Hemsa Premium
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {room.name}
                </h3>

                <p className="text-3xl font-extrabold text-blue-900 mb-3">
                  {room.price}
                  <span className="text-sm text-gray-500 font-medium">
                    {' '} / night
                  </span>
                </p>

                <p className="text-gray-600 mb-6">
                  {room.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {room.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
               href={`https://wa.me/917877548479?text=${encodeURIComponent(
                 `Hi, I want to book a room at Hotel Hemsa Connect.\nRoom Type: \nCheck-in Date:`
                    )}`}
              target="_blank"
            rel="noopener noreferrer"
          className="block text-center w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
                 >
                Book on WhatsApp
                  </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
