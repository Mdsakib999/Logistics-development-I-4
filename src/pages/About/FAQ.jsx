import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";

export default function FAQ() {
  const faq = [
    {
      ques: "Wie unterscheidet sich FastGo von anderen Logistikplattformen?",
      ans: "FastGo ist eine leichte, headless und no-code Logistiklösung für moderne Unternehmen. Anders als herkömmliche Plattformen können Sie über mehrere Kanäle (Social Media, Zahlungslinks, Websites) verkaufen, ohne eine komplexe Einrichtung oder hohes technisches Wissen zu benötigen.",
    },
    {
      ques: "Kann ich meine eigene Domain mit FastGo nutzen?",
      ans: "Ja, Sie können Ihre bestehende Domain verbinden. FastGo bietet auch ein kostenloses Domain-Suffix für alle Verkäufer bei der Kontoerstellung.",
    },
    {
      ques: "Kann ich meine Produkte mit FastGo verkaufen, ohne einen Online-Shop zu erstellen?",
      ans: "Ja! Mit FastGo können Sie Zahlungslinks generieren und diese direkt über soziale Medien, Messaging-Apps oder E-Mail teilen. Kunden können ihre Einkäufe abschließen, ohne einen traditionellen Online-Shop zu besuchen.",
    },
    {
      ques: "Gibt es eine Einrichtungsgebühr für die Nutzung von FastGo?",
      ans: "Nein, es gibt keine Einrichtungsgebühren. Sie können FastGo sofort nach der Kontoerstellung kostenlos nutzen.",
    },
    {
      ques: "Gibt es Transaktionsgebühren oder Provisionen?",
      ans: "Nein, FastGo erhebt keine Provisionen oder versteckte Gebühren auf Ihre Verkäufe. Sie zahlen nur die üblichen Gebühren des Zahlungsanbieters (wie Stripe oder PayPal), je nach Anbieter, den Sie verbinden.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center pb-2 md:pb-4">
            <Subtitle>Häufig gestellte Fragen</Subtitle>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto opacity-85">
            Alles, was Sie über FastGo wissen müssen. Finden Sie nicht die
            Antwort, die Sie suchen? Kontaktieren Sie gerne unser Support-Team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faq.map((fa, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "ring-2 ring-yellow-500" : ""
              }`}
            >
              <div
                className="p-5 sm:p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h2
                    className={`text-base sm:text-md font-semibold uppercase opacity-70  transition-colors ${
                      activeIndex === index
                        ? "text-yellow-600"
                        : "text-gray-800"
                    }`}
                  >
                    {fa.ques}
                  </h2>
                  <div className="flex-shrink-0 mt-1">
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-yellow-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {fa.ans}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Haben Sie noch Fragen?
          </h3>
          <p className="text-gray-600 mb-6">
            Unser Support-Team ist hier, um Ihnen beim Einstieg mit FastGo zu
            helfen.
          </p>
          <Link to="/contact">
            <button className=" ">
              <Btn>Support kontaktieren</Btn>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
