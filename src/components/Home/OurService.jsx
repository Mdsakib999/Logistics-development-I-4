import { Link } from "react-router";
import Title from "../../utils/Title";
import {
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaClipboardCheck,
  FaShoppingCart,
} from "react-icons/fa";

export default function OurService() {
  const services = [
    {
      name: "Seefracht",
      desc: "Bei FastGo bieten wir zuverlässige Seefrachtlösungen, die auf Ihre Ladung und Ihren Zeitplan zugeschnitten sind.",
      icon: <FaShip size={20} />,
    },
    {
      name: "Luftfracht",
      desc: "Schnelle, sichere Luftfracht für zeitkritische Sendungen weltweit.",
      icon: <FaPlane size={20} />,
    },
    {
      name: "Straßentransport",
      desc: "Effiziente Straßentransportnetze für letzte Meile und Langstreckenlieferungen.",
      icon: <FaTruck size={20} />,
    },
    {
      name: "Lagerhaltung",
      desc: "Sichere und flexible Lagerlösungen für Kurz- und Langzeitlagerung.",
      icon: <FaWarehouse size={20} />,
    },
    {
      name: "Zollabfertigung",
      desc: "Reibungslose Zollabwicklung und Dokumentation, damit Ihre Sendungen weiterkommen.",
      icon: <FaClipboardCheck size={20} />,
    },
    {
      name: "E‑Commerce‑Lösungen",
      desc: "Erfüllungs- und Versandlösungen für das Wachstum und die Geschwindigkeit im E‑Commerce.",
      icon: <FaShoppingCart size={20} />,
    },
  ];

  return (
    <div className="bg-[#EDF0F3] p-4 pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-10">
          <Title>Unsere Dienstleistungen</Title>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
            Effizienter und zuverlässiger Versand mit FastGo
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, i) => (
            <div
              key={i}
              className="group w-full bg-white h-auto rounded-md shadow-md flex flex-col items-start p-4 sm:p-6 pt-8 space-y-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-yellow-500"
            >
              {/* BLACK ICON BADGE */}
              <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-2xl flex items-center justify-center bg-black text-white">
                {service.icon}
              </div>

              {/* content */}
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold uppercase text-yellow-500 transition-colors duration-300 group-hover:text-white">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link to="/services">
            <button className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition">
              Alle Dienstleistungen anzeigen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
