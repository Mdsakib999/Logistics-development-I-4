import { CheckCircle, MapPin, MessageSquare, Package } from "lucide-react";
import { Link } from "react-router";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function ProcessSection() {
  const steps = [
    {
      step: "Schritt 01",
      title: "Beratung",
      desc: "Wir beginnen damit, Ihre geschäftlichen Anforderungen zu verstehen und eine maßgeschneiderte Logistiklösung zu entwerfen.",
      icon: MessageSquare,
    },
    {
      step: "Schritt 02",
      title: "Planung",
      desc: "Unsere Experten erstellen eine detaillierte Route und einen Zeitplan, um Kosteneffizienz und Zuverlässigkeit zu gewährleisten.",
      icon: MapPin,
    },
    {
      step: "Schritt 03",
      title: "Ausführung",
      desc: "Von der Verpackung bis zum Transport führen wir alles mit Präzision und kontinuierlicher Verfolgung aus.",
      icon: Package,
    },
    {
      step: "Schritt 04",
      title: "Lieferung",
      desc: "Pünktliche Lieferung an Ihrem Zielort mit garantierter Sicherheit und Zufriedenheit.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="py-16 lg:py-20 bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Title>WIE WIR ARBEITEN</Title>
          <div className="flex justify-center">
            <Subtitle>Einfache Schritte für einen nahtlosen Versand</Subtitle>
          </div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-4">
            Von der Beratung bis zur Lieferung ist unser Prozess darauf
            ausgelegt, die Dinge einfach, transparent und effektiv zu halten.
          </p>
        </div>

        {/* Desktop Layout (Large screens) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-2">
                      {item.step}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Layout (Timeline) */}
        <div className="lg:hidden flex justify-center">
          <div className="relative border-l-4 border-yellow-400 ml-4 sm:ml-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="mb-12 ml-6 sm:ml-10 relative">
                  {/* Circle marker with icon */}
                  <div className="absolute -left-[38px] sm:-left-[52px] top-1 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Step Content */}
                  <div className="bg-white border-2 border-gray-200 rounded-xl shadow-md p-4 sm:p-6 transition duration-300 hover:shadow-lg hover:border-yellow-400 w-full sm:w-[500px]">
                    <p className="text-xs sm:text-sm font-bold text-yellow-500 uppercase tracking-widest">
                      {item.step}
                    </p>
                    <h3 className="text-base sm:text-xl font-bold text-gray-800 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-2xl shadow-lg p-8 sm:p-10 max-w-4xl mx-auto border-2 border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Bereit für den sicheren Versand?
          </h3>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Schließen Sie sich Tausenden von Unternehmen an, die uns ihre
            Logistikbedürfnisse anvertrauen. Starten Sie noch heute und erleben
            Sie einen problemlosen Versand.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="/contact"
              className="
                  px-8 py-3 hover:bg-black  uppercase hover:text-yellow-500 text-sm sm:text-base md:text-lg rounded-lg  
                  text-center flex justify-center items-center cursor-pointer  transition duration-300 bg-yellow-500 text-black
                "
            >
              Kostenloses Angebot anfordern
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
