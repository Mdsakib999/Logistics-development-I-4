import { IoLocationSharp } from "react-icons/io5";

export default function ContactLocation() {
  const features = [
    {
      title: "North America Headquarters",
      description:
        "Our central hub for freight operations across the U.S., Canada, and Mexico, ensuring seamless cross-border logistics.",
    },
    {
      title: "European Office",
      description:
        "Serving customers across the EU with efficient and scalable freight solutions tailored for regional logistics.",
    },
    {
      title: "Asia-Pacific Hub",
      description:
        "Strategically located to manage cross-border shipping and logistics in South Asia, Southeast Asia, and Oceania.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-center md:text-left pb-7">
          Location
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center md:text-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-3"
              >
                <IoLocationSharp size={44} className="text-yellow-500" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-[#808380] text-sm sm:text-base mt-2">
                    {feature.description}
                  </p>
                  {index !== features.length - 1 && (
                    <hr className="mt-4 border-[#333]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content (Map) */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="company-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48890593.58373704!2d-18.710101204435016!3d41.58990882419923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sbd!4v1758793616331!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
