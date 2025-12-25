import Image from "next/image";



interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export default function GalleryPage() {
  const images: GalleryImage[] = [
    {
      src: "/buildinghemsa.jpeg",
      alt: "Luxury Jacuzzi Room at Hotel Hemsa Connect Udaipur",
      category: "Building "
    },
    {
      src: "/room with jacuzzi.jpeg",
      alt: "Luxury Jacuzzi Room at Hotel Hemsa Connect Udaipur",
      category: "Jacuzzi Room"
    },
    {
      src: "/deluxe room .jpeg",
      alt: "Premium Deluxe Room at Hotel Hemsa Connect",
      category: " Deluxe Rooms"
    },
    // {
    //   src: "/images/gallery/executive-room.jpg",
    //   alt: "Executive Comfort Room near Udaipur Railway Station",
    //   category: "Rooms"
    // },
    // {
    //   src: "/images/gallery/bathroom.jpg",
    //   alt: "Modern Clean Bathroom at Hotel Hemsa Connect",
    //   category: "Bathrooms"
    // },
    // {
    //   src: "/images/gallery/hotel-front.jpg",
    //   alt: "Hotel Hemsa Connect Exterior View",
    //   category: "Hotel"
    // },
    // {
    //   src: "/images/gallery/reception.jpg",
    //   alt: "Hotel Hemsa Connect Reception Area",
    //   category: "Hotel"
    // },
    // {
    //   src: "/images/gallery/parking.jpg",
    //   alt: "Free Parking Facility at Hotel Hemsa Connect",
    //   category: "Amenities"
    // },
    // {
    //   src: "/images/gallery/location.jpg",
    //   alt: "Hotel Hemsa Connect Near Udaipur Railway Station",
    //   category: "Location"
    // }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white-900 mb-4">
            Gallery – Hotel Hemsa Connect
          </h1>
          <p className="text-lg text-white-600 max-w-3xl mx-auto">
            Explore our luxury rooms, private Jacuzzi suites, premium amenities
            and prime location near Udaipur Railway Station.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-6">
                  <p className="text-white text-sm uppercase tracking-wide">
                    {img.category}
                  </p>
                  <p className="text-white font-semibold">
                    {img.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
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
    </section>



  );
}
