import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function ProcessSection() {
  const steps = [
    {
      step: "Step 01",
      title: "Consultation",
      desc: "We start by understanding your business needs and designing a tailored logistics solution.",
    },
    {
      step: "Step 02",
      title: "Planning",
      desc: "Our experts create a detailed route and timeline ensuring cost-efficiency and reliability.",
    },
    {
      step: "Step 03",
      title: "Execution",
      desc: "From packaging to transport, we execute with precision and continuous tracking.",
    },
    {
      step: "Step 04",
      title: "Delivery",
      desc: "Timely delivery at your destination with complete safety and satisfaction guaranteed.",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Title>HOW WE WORK</Title>
          <div className="flex justify-center text-center">
            <Subtitle>Simple Steps to Seamless Shipping</Subtitle>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            From consultation to delivery, our process is designed to keep
            things simple, transparent, and effective.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Timeline */}
          <div className="relative border-l-4 border-yellow-400 ml-4 sm:ml-10">
            {steps.map((item, index) => (
              <div key={index} className="mb-12 ml-6 sm:ml-10 relative">
                {/* Circle marker */}
                <div className="absolute -left-7 sm:-left-10 top-1 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full border-4 border-white shadow-md"></div>

                {/* Step Content */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-4 sm:p-6 transition duration-700 hover:scale-[1.03] hover:shadow-lg w-full sm:w-[500px] lg:w-[650px]">
                  <p className="text-xs sm:text-sm font-bold text-yellow-500 uppercase tracking-widest">
                    {item.step}
                  </p>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-gray-800 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
