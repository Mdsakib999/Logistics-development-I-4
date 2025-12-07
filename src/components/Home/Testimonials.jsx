import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const testimonials = [
  {
    name: "John Doe",
    title: "Geschäftsführer, RexoIT",
    text: "Ich nutze FastGo Cargo Logistik – sie sind effizient, zuverlässig und liefern immer pünktlich. Sehr empfehlenswert für alle geschäftlichen Anforderungen.",
    rating: 5,
  },
  {
    name: "David Lee",
    title: "Unternehmer",
    text: "Das FastGo-Team ist professionell und zuverlässig. Ich empfehle sie jedem, der Logistiklösungen benötigt.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Freiberuflicher Berater",
    text: "FastGo hat die Art und Weise, wie ich meine Logistik handhabe, verändert. Ihr Service ist zuverlässig, effizient und immer pünktlich.",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    title: "CEO, Tech Innovations",
    text: "Wir nutzen FastGo seit über einem Jahr und ich bin wirklich beeindruckt. Sie halten immer, was sie versprechen.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    title: "Betriebsleiter",
    text: "Hervorragender Service! FastGo behandelt unsere internationalen Sendungen mit Sorgfalt und Präzision. Hatte nie Probleme.",
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
            <Title>Kundenstimmen</Title>
            <Subtitle>Was unsere Kunden sagen</Subtitle>
            {/* text-gray-600 text-base sm:text-lg */}
            <p className="text-gray-600 text-base sm:text-lg opacity-75">
              Verlassen Sie sich nicht nur auf unser Wort..
            </p>
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
