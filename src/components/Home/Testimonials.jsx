import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const testimonials = [
  {
    name: "John Doe, Business Owner",
    text: "I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time. I highly recommend them to anyone in need of logistics services.",
    rating: 5,
    image: "women.png",
    icon: "https://i.ibb.co.com/gLN2d2br/Icon-1.png",
    featured: true,
  },
  {
    name: "Jane Smith, Freelance Consultant",
    text: "FastGo has transformed the way I handle my logistics. Their service is reliable, efficient, and always on time.",
    rating: 4,
    image: "women.png",
    icon: "https://i.ibb.co.com/gLN2d2br/Icon-1.png",
    featured: false,
  },
  {
    name: "Michael Johnson, CEO",
    text: "We’ve been using FastGo for over a year now, and I’m truly impressed. They always deliver on their promises.",
    rating: 5,
    image: "women.png",
    icon: null,
    featured: false,
  },
  {
    name: "David Lee, Entrepreneur",
    text: "The FastGo team is professional and dependable. I recommend them to anyone in need of logistics solutions.",
    rating: 4,
    image: "women.png",
    icon: "",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5 py-10 gap-10">
      {/* ✅ Left side - Featured testimonial */}
      <div className="w-full lg:w-1/2 space-y-5">
        <div>
          <Title>Testimonials</Title>
          <Subtitle>Our Clients Speak for Us</Subtitle>
        </div>

        {testimonials
          .filter((t) => t.featured)
          .map((item, idx) => (
            <div key={idx}>
              {/* Dynamic Image Section */}
              {item.image && (
                <div className="border-amber-800 mt-10 sm:mt-16">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-[620px] transform transition duration-900 hover:scale-105">
                      <img
                        className="w-full h-auto rounded-xl"
                        src={item.image}
                        alt={item.name}
                      />
                      {item.icon && (
                        <img
                          className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 absolute -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8"
                          src={item.icon}
                          alt="icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Rating Card */}
              <div className="bg-[#111] rounded-2xl w-full p-4 sm:p-6 space-y-4 shadow-lg text-white mt-5 transform transition duration-900 hover:scale-105">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} size={24} />
                  ))}
                </div>
                <p className="opacity-85 text-xs sm:text-sm">{item.text}</p>
                <h4 className="text-base sm:text-lg font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
      </div>

      {/* ✅ Right side - Other testimonials */}
      <div className="w-full lg:w-5/12 space-y-3">
        {testimonials
          .filter((t) => !t.featured)
          .map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl w-full p-4 sm:p-6 sm:px-12 border border-gray-300 shadow-lg space-y-4 transform transition duration-900 hover:scale-105"
            >
              {/* Dynamic Stars */}
              <div className="flex justify-start gap-1 sm:gap-2 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
              </div>
              <p className="text-xs sm:text-sm">{item.text}</p>
              <h4 className="text-base sm:text-lg font-semibold">{item.name}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}
