import { FaBoxOpen, FaPlane, FaTruck, FaWarehouse } from "react-icons/fa";
import Title from "../../utils/Title";

export default function ServicesSection() {
  const services = [
    {
      icon: <FaTruck size={28} />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery services tailored to your needs. We ensure timely shipping for your satisfaction.",
    },
    {
      icon: <FaBoxOpen size={28} />,
      title: "Secure Packaging",
      description:
        "Your goods are packed with care and precision to guarantee safety and minimize damage risks.",
    },
    {
      icon: <FaPlane size={28} />,
      title: "International Shipping",
      description:
        "Expanding your reach with hassle-free global shipping services that you can depend on.",
    },
    {
      icon: <FaWarehouse size={28} />,
      title: "Storage Solutions",
      description:
        "Flexible and secure storage options for your goods, tailored to short-term and long-term needs.",
    },
    {
      icon: <FaTruck size={28} />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery services tailored to your needs. We ensure timely shipping for your satisfaction.",
    },
    {
      icon: <FaBoxOpen size={28} />,
      title: "Secure Packaging",
      description:
        "Your goods are packed with care and precision to guarantee safety and minimize damage risks.",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* ✅ Section Header */}
        <div className="text-center mb-12">
          <Title>Our Services</Title>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold uppercase text-center">
            Efficient and Reliable Shipping with FastGo
          </div>
        </div>

        {/* ✅ Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] md:w-[300px] lg:w-[326px] h-auto bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="bg-yellow-400 p-4 rounded-full mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
