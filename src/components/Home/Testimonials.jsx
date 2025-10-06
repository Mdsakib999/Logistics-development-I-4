import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const testimonials = [
  {
    name: "John Doe, Business Owner",
    text: "I have been using FastGo cargo logistiy are efficient, reliable, and always deliver on time.",
    rating: 5,
    image: "women.png",
    icon: "https://i.ibb.co.com/gLN2d2br/Icon-1.png",
  },
  {
    name: "David Lee, Entrepreneur",
    text: "The FastGo team is professional and dependable. I recommend them to anyone in need of logistics solutions.",
    rating: 4,
    image: "women.png",
    icon: "",
  },
  {
    name: "Jane Smith, Freelance Consultant",
    text: "FastGo has transformed the way I handle my logistics. Their service is reliable, efficient, and always on time.",
    rating: 4,
    image: "women.png",
    icon: "https://i.ibb.co.com/gLN2d2br/Icon-1.png",
  },
  {
    name: "Michael Johnson, CEO",
    text: "We’ve been using FastGo for over a year now, and I’m truly impressed. They always deliver on their promises.",
    rating: 5,
    image: "women.png",
    icon: null,
  },
  {
    name: "David Lee, Entrepreneur",
    text: "The FastGo team is professional and dependable. I recommend them to anyone in need of logistics solutions.",
    rating: 4,
    image: "women.png",
    icon: "",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Left Title Section */}
      <div className="mb-12">
        <Title>Testimonials</Title>
        <Subtitle>What Our Clients Say</Subtitle>
      </div>

      {/* Marquee Section */}
      <Marquee pauseOnHover gradient={false} speed={50} className="space-x-6 overflow-y-hidden">
        {testimonials
          .map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-2xl shadow-md border border-gray-200 p-6 w-80 mx-3 transform transition duration-300 hover:scale-105"
            >
              <div className="flex gap-1 text-yellow-400 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>
              <p className="text-sm opacity-80 mb-3">“{item.text}”</p>
              <h4 className="text-base font-semibold">{item.name}</h4>
            </div>
          ))}
      </Marquee>
    </div>
  );
}
