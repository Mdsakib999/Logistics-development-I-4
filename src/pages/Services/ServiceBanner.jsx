import { Link } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function ServiceBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-5/12 space-y-5 text-center lg:text-left">
          <Title>SERVICES</Title>
          <Subtitle>Everything You Need We Have</Subtitle>
          <p className="text-sm md:text-base text-[#5C6C7B] max-w-xl mx-auto lg:mx-0">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs. With
            years of experience and a team of experts, we are dedicated to
            empowering your business with seamless shipping experiences.
          </p>
          <Link to="/contact">
            <div className="flex justify-center lg:justify-start">
              <Btn>Learn More</Btn>
            </div>
          </Link>
        </div>

        {/* Right Content (Images) */}
        <div className="relative w-11/12 lg:mt-12 md:w-6/12 lg:w-5/12 h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
          {/* Left Image */}
          <img
            src="https://i.ibb.co.com/k6yJjXtr/Frame-1000007304.png"
            alt="containers"
            className="rounded-lg w-[145px] sm:w-[200px] md:w-[220px] hover:z-10 lg:w-[245px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-full object-cover absolute left-0 bottom-0 transition-all hover:brightness-110 duration-1000"
          />

          {/* Right Image */}
          <img
            src="https://i.ibb.co.com/M5fXXX4S/Frame-1000007305.png"
            alt="warehouse"
            className="rounded-lg w-[145px] sm:w-[200px] md:w-[220px]  lg:w-[245px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-full object-cover absolute right-0 bottom-8 sm:bottom-12 md:bottom-14 lg:bottom-16 transition-all hover:brightness-110 duration-1000"
          />
        </div>
      </div>
    </div>
  );
}
