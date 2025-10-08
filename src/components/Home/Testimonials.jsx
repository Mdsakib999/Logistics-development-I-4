import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const testimonials = [
  {
    name: "John Doe",
    title: "Chief Executive, RexoIT",
    text: "I have been using FastGo cargo logistics - they are efficient, reliable, and always deliver on time. Highly recommended for any business needs.",
    rating: 5,
  },
  {
    name: "David Lee",
    title: "Entrepreneur",
    text: "The FastGo team is professional and dependable. I recommend them to anyone in need of logistics solutions.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Freelance Consultant",
    text: "FastGo has transformed the way I handle my logistics. Their service is reliable, efficient, and always on time.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    title: "CEO, Tech Innovations",
    text: "We've been using FastGo for over a year now, and I'm truly impressed. They always deliver on their promises.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    title: "Operations Manager",
    text: "Outstanding service! FastGo handles our international shipments with care and precision. Never had any issues.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 lg:py-20 max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16 flex text-center justify-center">
          <div>
            <Title>Testimonials</Title>
            <Subtitle>What Our Clients Say</Subtitle>
            {/* text-gray-600 text-base sm:text-lg */}
            <p className="text-gray-600 text-base sm:text-lg opacity-75">Don't just take our word for it..</p>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="overflow-hidden">
        <Marquee pauseOnHover={true} speed={50} gradient={false}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 sm:p-8 w-[320px] sm:w-[380px] mx-4 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-yellow-500" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 relative z-10">
                "{item.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
