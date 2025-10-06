import { FaArrowRight } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const Experience = () => {
  return (
    <div className="py-16 sm:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-10">
        <Title>Our Experience</Title>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 space-y-6">
          <Subtitle>
            Fast, reliable & 
            <span className="text-yellow-500"> damage free.</span>
          </Subtitle>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-4 md:px-36">
            {/* Button */}
            <div>
              <Btn>Know More</Btn>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4">
              <LuPhoneCall
                size={35}
                className="text-yellow-500 flex-shrink-0"
              />
              <p className="text-sm sm:text-base leading-tight">
                <span className="opacity-80 block">Call Us anytime</span>
                <span className="text-black font-semibold block">
                  +1 (555) 000-0000
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[url('https://i.ibb.co.com/XfTb7MXB/Truck.png')] h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl relative bg-center bg-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white font-medium text-base sm:text-lg">
                Road Transport
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={26}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-[url('https://i.ibb.co.com/nMgwgdqV/pexels-rukiyeoagaoglu-50613294-34162603.jpg')] h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl relative bg-center bg-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white font-medium text-base sm:text-lg">
                Sea Freight
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={26}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-[url('https://i.ibb.co.com/CstyLk7C/gg.jpg')] h-[260px] sm:h-[280px] lg:h-[300px] rounded-xl relative bg-center bg-cover transition-all duration-500 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <h3 className="text-white font-medium text-base sm:text-lg">
                Rail Logistics
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={26}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
