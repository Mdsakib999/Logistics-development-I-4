import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Subtitle from "../../utils/Subtitle";

const testimonials = [
  {
    name: "John Doe, Business Owner",
    text: "I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time.",
    rating: 5,
    image: "https://i.ibb.co.com/603111dW/Image-3.png",
  },
  {
    name: "Jane Smith, Freelance Consultant",
    text: "FastGo has transformed the way I handle my logistics. Their service is reliable, efficient, and always on time.",
    rating: 4,
    image: "https://i.ibb.co.com/dwtFQQSM/pexels-chanaka-906494.jpg",
  },
  {
    name: "Michael Johnson, CEO",
    text: "We’ve been using FastGo for over a year now, and I’m truly impressed. They always deliver on their promises.",
    rating: 5,
    image: "https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png",
  },
  {
    name: "David Lee, Entrepreneur",
    text: "The FastGo team is professional and dependable. I recommend them to anyone in need of logistics solutions.",
    rating: 4,
    image: "https://i.ibb.co.com/BHr1YjL7/Image.png",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  return (
    <div className="bg-[#F8FAFC] py-20 bg-gradient-to-br from-white via-white to-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <Subtitle>What Our Clients Say</Subtitle>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Real feedback from clients who trust us with their logistics and
            shipping needs.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative flex flex-col items-center">
          <div
            key={current} // important for re-rendering animation
            className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl text-center 
                       transition-all duration-700 ease-in-out 
                       animate-fadeSlide"
          >
            {/* Client Image */}
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md object-cover"
              />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-3 text-yellow-500">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>

            {/* Feedback */}
            <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
              “{testimonial.text}”
            </p>

            {/* Name */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
              {testimonial.name}
            </h4>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-yellow-400 bg-yellow-400 text-black cursor-pointer transition"
            >
              <AiOutlineLeft size={22} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-yellow-400 bg-yellow-400 text-black cursor-pointer transition"
            >
              <AiOutlineRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
