import { useState } from "react";
import {
  FaArrowRight,
  FaTruck,
  FaShip,
  FaTrain,
  FaPlane,
} from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function TransportTypes() {
  const [activeTransport, setActiveTransport] = useState("road");

  const transportTypes = [
    {
      id: "road",
      name: "Road Transport",
      icon: <FaTruck size={24} />,
      image: "https://i.ibb.co.com/XfTb7MXB/Truck.png",
      description:
        "Our road transport services offer flexible, door-to-door delivery across regions. With a modern fleet and experienced drivers, we ensure timely and secure delivery of your cargo.",
      features: [
        "24/7 real-time tracking",
        "Temperature-controlled vehicles",
        "Express and standard delivery options",
        "Full cargo insurance coverage",
      ],
      stats: {
        capacity: "Up to 40 tons",
        coverage: "Nationwide",
        delivery: "Same day available",
      },
    },
    {
      id: "sea",
      name: "Sea Freight",
      icon: <FaShip size={24} />,
      image:
        "https://i.ibb.co.com/nMgwgdqV/pexels-rukiyeoagaoglu-50613294-34162603.jpg",
      description:
        "Cost-effective ocean freight solutions for international shipping. We handle FCL and LCL shipments with complete customs clearance and documentation support.",
      features: [
        "Full Container Load (FCL) & Less than Container Load (LCL)",
        "Port-to-port and door-to-door services",
        "Customs clearance assistance",
        "Competitive shipping rates",
      ],
      stats: {
        capacity: "Up to 10,000 TEU",
        coverage: "Global ports",
        delivery: "10-45 days",
      },
    },
    {
      id: "rail",
      name: "Rail Logistics",
      icon: <FaTrain size={24} />,
      image: "https://i.ibb.co.com/CstyLk7C/gg.jpg",
      description:
        "Eco-friendly and cost-efficient rail freight services for bulk shipments. Perfect for long-distance transportation with reduced carbon footprint.",
      features: [
        "Intermodal container shipping",
        "Bulk cargo handling",
        "Eco-friendly transport solution",
        "Scheduled and reliable departures",
      ],
      stats: {
        capacity: "Up to 5,000 tons",
        coverage: "Continental routes",
        delivery: "5-15 days",
      },
    },
    {
      id: "air",
      name: "Air Freight",
      icon: <FaPlane size={24} />,
      image:
        "https://images.unsplash.com/photo-1483375801503-374c5f660610?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      description:
        "Fast and reliable air cargo services for urgent shipments. We work with major airlines to ensure your time-sensitive goods arrive on schedule worldwide.",
      features: [
        "Next-day delivery options",
        "Priority handling for urgent cargo",
        "Pharmaceutical and perishable goods certified",
        "Global airport network",
      ],
      stats: {
        capacity: "Up to 100 tons",
        coverage: "500+ airports",
        delivery: "1-5 days",
      },
    },
  ];

  const activeData = transportTypes.find((t) => t.id === activeTransport);

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Title>Transport Solutions</Title>
          <Subtitle>
            Comprehensive logistics services across
            <span className="text-yellow-500"> all transport modes</span>
          </Subtitle>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Transport Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {transportTypes.map((transport) => (
              <div
                key={transport.id}
                onClick={() => setActiveTransport(transport.id)}
                className={`group cursor-pointer h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl relative bg-center bg-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-xl overflow-hidden ${
                  activeTransport === transport.id
                    ? "ring-4 ring-yellow-400 scale-[1.02]"
                    : ""
                }`}
                style={{ backgroundImage: `url(${transport.image})` }}
              >
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeTransport === transport.id
                      ? "bg-black/50"
                      : "bg-black/30 group-hover:bg-black/40"
                  }`}
                ></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-white font-medium text-base sm:text-lg">
                    {transport.name}
                  </h3>
                  <FaArrowRight
                    className={`p-2 rounded-full transition-all duration-300 ${
                      activeTransport === transport.id
                        ? "bg-yellow-500 text-black"
                        : "text-yellow-400 bg-black group-hover:bg-yellow-500 group-hover:text-black"
                    }`}
                    size={26}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Detailed Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 p-4 rounded-xl text-white">
                {activeData.icon}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold ">
                {activeData.name}
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {activeData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {activeData.stats.capacity}
                </p>
                <p className="text-sm text-gray-400 mt-1">Capacity</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {activeData.stats.coverage}
                </p>
                <p className="text-sm text-gray-400 mt-1">Coverage</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">
                  {activeData.stats.delivery}
                </p>
                <p className="text-sm text-gray-400 mt-1">Delivery</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Key Features</h3>
              <ul className="space-y-2">
                {activeData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              {/* Primary CTA */}
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-sm hover:bg-yellow-500 transform transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                aria-label="Get a quote"
              >
                Get a Quote
              </button>

              {/* Phone / Contact */}
              <a
                href="tel:+15550000000"
                className="inline-flex justify-center  items-center  px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-yellow-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
              >
                <LuPhoneCall
                  size={24}
                  className="text-yellow-500 flex-shrink-0 "
                />
                <div className="text-sm sm:text-base leading-tight flex flex-col justify-center border">
                  <span className="text-black font-semibold">
                    +1 (555) 000-0000
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
