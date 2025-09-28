import { FiAnchor } from "react-icons/fi";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

const AboutUs = () => {
  const features = [
    { number: "01", title: "Expertise and Experience" },
    { number: "02", title: "Committed to Quality" },
    { number: "03", title: "Comprehensive Services" },
  ];
  return (
    <div className="max-w-7xl mx-auto p-10 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
        <div className="w-full lg:w-6/12 space-y-5 text-center lg:text-left ">
          <Title>About us</Title>
          <Subtitle>
            Empowering Your Business with Tailored Logistics Solutions
          </Subtitle>
          <p className="text-sm md:text-base text-[#5C6C7B] max-w-xl mx-auto lg:mx-0">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs. With
            years of experience and a team of experts, we are dedicated to
            empowering your business with seamless shipping experiences.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Btn>Learn More</Btn>
          </div>
        </div>
        <div
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-cover bg-center w-full lg:w-4/12 rounded-2xl relative transform transition duration-900 hover:scale-105"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png)`,
          }}
        >
          <div className="w-[110px] sm:w-[130px] h-[130px] sm:h-[150px] bg-white absolute bottom-10 left-6 rounded-lg">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-300 flex justify-center items-center rounded-full absolute -top-4 sm:-top-5 left-3 text-white">
              <FiAnchor size={22} className="sm:size-[28px]" />
            </div>
            <div className="flex flex-col items-center justify-center relative h-full">
              <h1 className="text-center text-2xl sm:text-3xl font-bold top-7 absolute">
                647+
              </h1>
              <div className="w-[100px] sm:w-[115px] h-[40px] sm:h-[50px] bg-yellow-400 absolute bottom-3 rounded-md flex items-center justify-center">
                <p className="text-white uppercase text-xs sm:text-sm text-center">
                  Awards Winning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-xl px-6 py-3 flex items-center gap-4 sm:gap-6 w-full sm:w-[320px] transform transition duration-900 hover:scale-105"
            >
              <div className="font-bold text-xl sm:text-2xl md:text-3xl">
                {item.number}
              </div>
              <div className="h-10 sm:h-12 w-px bg-gray-500"></div>
              <div className="flex flex-col">
                <span className="uppercase font-semibold text-base sm:text-md md:text-lg lg:text-xl tracking-wide text-center md:text-left">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
