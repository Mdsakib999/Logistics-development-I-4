import { FaBoxOpen, FaPlane, FaTruck, FaWarehouse } from "react-icons/fa";
import Title from "../../utils/Title";

export default function ServicesSection() {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaTruck size={20} />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery services tailored to your needs. We ensure timely shipping for your satisfaction.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaBoxOpen size={20} />,
      title: "Secure Packaging",
      description:
        "Your goods are packed with care and precision to guarantee safety and minimize damage risks.",
    },
    {
      image:
        "https://images.unsplash.com/flagged/photo-1555685460-1d9cf532761b?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaPlane size={20} />,
      title: "International Shipping",
      description:
        "Expanding your reach with hassle-free global shipping services that you can depend on.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1681426730828-bfee2d13861d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaWarehouse size={20} />,
      title: "Storage Solutions",
      description:
        "Flexible and secure storage options for your goods, tailored to short-term and long-term needs.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaTruck size={20} />,
      title: "Fast Delivery (Extra)",
      description:
        "Quick and reliable delivery services tailored to your needs. We ensure timely shipping for your satisfaction.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaBoxOpen size={20} />,
      title: "Secure Packaging (Extra)",
      description:
        "Your goods are packed with care and precision to guarantee safety and minimize damage risks.",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Title>Our Services</Title>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold uppercase text-center">
            Efficient and Reliable Shipping with FastGo
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[280px] md:w-[300px] lg:w-[326px] bg-white shadow-md rounded-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image (full width) */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 sm:h-44 md:h-44 lg:h-40 object-cover"
                />

                {/* Yellow circular icon badge overlapping the image */}
                <div className="absolute left-4 -bottom-5 bg-yellow-400 p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Card content */}
              <div className="p-6 pt-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-yellow-500">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
