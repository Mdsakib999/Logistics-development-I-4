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
      name: "Ocean Shipping",
      desc: "At FastGo, we provide reliable ocean freight solutions tailored to your cargo and schedule.",
      // icon: FaShip
      icon: <FaShip size={20} />,
    },
    {
      name: "Air Freight",
      desc: "Fast, secure air freight services for time-sensitive shipments across the globe.",
      icon: <FaPlane size={20} />,
    },
    {
      name: "Road Transport",
      desc: "Efficient road transport networks for last-mile and long-haul deliveries.",
      icon: <FaTruck size={20} />,
    },
    {
      name: "Warehousing",
      desc: "Secure and flexible warehousing solutions for short- and long-term storage.",
      icon: <FaWarehouse size={20} />,
    },
    {
      name: "Customs Clearance",
      desc: "Smooth customs processing and documentation to keep your shipments moving.",
      icon: <FaClipboardCheck size={20} />,
    },
    {
      name: "E-commerce Solutions",
      desc: "Fulfillment and shipping solutions built for e-commerce growth and speed.",
      icon: <FaShoppingCart size={20} />,
    },
  ];

  return (
    <div className="bg-[#EDF0F3] p-4 pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center py-10">
          <Title>Our services</Title>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
            Efficient and Reliable Shipping with FastGo
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
              See All Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
