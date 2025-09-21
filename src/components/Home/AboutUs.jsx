import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";
import { FiAnchor } from "react-icons/fi";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-10">
      <div className="flex justify-around items-center  w-full ">
        <div className="w-6/12 space-y-5">
          <Title>About us</Title>
          <Subtitle>
            Empowering Your Business with Tailored Logistics Solutions
          </Subtitle>
          <p className="text-sm text-[#5C6C7B]">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs. With
            years of experience and a team of experts, we are dedicated to
            empowering your business with seamless shipping experiences.
          </p>
          <Btn>Learn More</Btn>
        </div>
        <div
          className="h-[380px] bg-cover bg-center  w-4/12 rounded-2xl relative"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/dwtFQQSM/pexels-chanaka-906494.jpg)`,
          }}
        >
          <div className="w-[130px] h-[150px] bg-white absolute bottom-4 left-3 rounded-lg">
            <div className="w-10 h-10 bg-yellow-300 flex justify-center items-center rounded-full absolute -top-5 left-3 text-white">
                <FiAnchor size={28} />
            </div>
            <div className="flex flex-col items-center justify-center"> 
                <h1 className="text-center text-3xl font-bold top-8 absolute">647+</h1>
            <div className="w-[115px] h-[50px] bg-yellow-400 bottom-3 absolute rounded-md">
              <p className="text-white uppercase text-center">Awwards Winning</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex justify-between pt-10">
        <div className="bg-black text-white rounded-xl px-6 py-8 flex items-center gap-6 w-[320px]">
          <div className=" font-bold text-4xl">01</div>
          <div className="h-12 w-px bg-gray-500"></div>
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xl tracking-wide">
              Expertise and Experience
            </span>
          </div>
        </div>
        <div className="bg-black text-white rounded-xl px-6 py-8 flex items-center gap-6 w-[320px]">
          <div className=" font-bold text-4xl">02</div>
          <div className="h-12 w-px bg-gray-500"></div>
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xl tracking-wide">
              Committed to Quality
            </span>
          </div>
        </div>
        <div className="bg-black text-white rounded-xl px-6 py-8 flex items-center gap-6 w-[320px]">
          <div className=" font-bold text-4xl">03</div>
          <div className="h-12 w-px bg-gray-500"></div>
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xl tracking-wide">
              Comprehensive Services
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
