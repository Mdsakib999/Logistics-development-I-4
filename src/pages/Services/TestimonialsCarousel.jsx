import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Subtitle from "../../utils/Subtitle";

const testimonials = [
  {
    name: "John Doe, Geschäftsinhaber",
    text: "Ich nutze FastGo Cargo Logistik- & Transportdienste nun seit über einem Jahr und bin äußerst zufrieden mit ihrem Service. Sie sind effizient, zuverlässig und liefern immer pünktlich.",
    rating: 5,
    image: "https://i.ibb.co.com/603111dW/Image-3.png",
  },
  {
    name: "Jane Smith, Freiberuflicher Berater",
    text: "FastGo hat die Art und Weise, wie ich meine Logistik handhabe, verändert. Ihr Service ist zuverlässig, effizient und immer pünktlich.",
    rating: 4,
    image: "https://i.ibb.co.com/dwtFQQSM/pexels-chanaka-906494.jpg",
  },
  {
    name: "Michael Johnson, CEO",
    text: "Wir nutzen FastGo seit über einem Jahr und ich bin wirklich beeindruckt. Sie halten immer, was sie versprechen.",
    rating: 5,
    image: "https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png",
  },
  {
    name: "David Lee, Unternehmer",
    text: "Das FastGo-Team ist professionell und zuverlässig. Ich empfehle sie jedem, der Logistiklösungen benötigt.",
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
            <Subtitle>Was unsere Kunden sagen</Subtitle>
          </div>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Echtes Feedback von Kunden, die uns ihre Logistik- und
            Versandanforderungen anvertrauen.
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
