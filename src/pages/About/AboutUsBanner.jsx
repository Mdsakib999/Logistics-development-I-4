import { Link } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function AboutUsBanner() {
  return (
    <div className="max-w-7xl mx-auto p-10 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
        <div className="w-full lg:w-6/12 space-y-5 text-center lg:text-left ">
          <Title>About us</Title>
          <Subtitle>Everything you need we have</Subtitle>
          <p className="text-sm md:text-base text-[#5C6C7B] max-w-xl mx-auto lg:mx-0">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs. With
            years of experience and a team of experts, we are dedicated to
            empowering your business with seamless shipping experiences.
          </p>

          <Link to="/services">
            <div className="flex justify-center lg:justify-start">
              <Btn>Learn More</Btn>
            </div>
          </Link>
        </div>
        <div
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] bg-cover bg-center w-full lg:w-4/12 rounded-2xl relative"
          style={{
            backgroundImage: `url(https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png)`,
          }}
        ></div>
      </div>
    </div>
  );
}
