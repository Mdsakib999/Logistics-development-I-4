import { FaArrowRight } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const Experience = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto">
      <Title>Our Experience</Title>

      <div className="w-full flex justify-between">
        <div className="w-1/3">
          <Subtitle>
            Fast, reliable, and{" "}
            <span className="text-yellow-500">damage free.</span>
          </Subtitle>
          <h1 className="font-bold py-6 text-gray-900 text-3xl mb-2"></h1>
          <div className="flex justify-between">
            <div>
              <Btn>Know More</Btn>
            </div>
            <div className="flex justify-center items-center gap-4">
              <LuPhoneCall size={35} />
              <p>
                <span className="opacity-80">Call Us anytime</span> <br />{" "}
                <span className="text-black font-semibold">+1 (555) 000-0000</span>
              </p>
            </div>
            
          </div>
        </div>

        <div className="w-3/5 grid grid-cols-3 gap-4 ">
          <div className="group bg-[url('https://i.ibb.co.com/XfTb7MXB/Truck.png')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:shadow-xl overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Road Transport
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={28}
              />
            </div>
          </div>
          <div className="group bg-[url('https://i.ibb.co.com/nMgwgdqV/pexels-rukiyeoagaoglu-50613294-34162603.jpg')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:shadow-xl overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Sea Freight
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={28}
              />
            </div>
          </div>
          <div className="group bg-[url('https://i.ibb.co.com/CstyLk7C/gg.jpg')] h-[300px] rounded-xl relative bg-center bg-cover transition-transform duration-500 ease-in-out hover:shadow-xl overflow-hidden">
            <div className="flex absolute bottom-2 justify-between gap-10 px-4">
              <h3 className="text-center bottom-1 text-white left-5 font-medium">
                Rail Logistics
              </h3>
              <FaArrowRight
                className="text-yellow-400 bg-black p-2 rounded-full group-hover:bg-yellow-500 group-hover:text-black cursor-pointer"
                size={28}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
