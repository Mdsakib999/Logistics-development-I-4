import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function ServiceBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
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
          <div className="flex justify-center lg:justify-start">
            <Btn>Learn More</Btn>
          </div>
        </div>

        {/* Right Content (Images) */}
        <div className="relative mt-16 w-full lg:w-5/12 flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-0 lg:block h-auto lg:h-[420px]">
          {/* Left Image */}
          <img
            src="https://i.ibb.co.com/k6yJjXtr/Frame-1000007304.png"
            alt="containers"
            className="rounded-lg w-[200px] sm:w-[220px] md:w-[240px] lg:w-[245px] object-cover h-[260px] sm:h-[300px] md:h-[340px] lg:h-full lg:absolute lg:left-0 lg:bottom-0"
          />

          {/* Right Image */}
          <img
            src="https://i.ibb.co.com/M5fXXX4S/Frame-1000007305.png"
            alt="warehouse"
            className="rounded-lg w-[200px] sm:w-[220px] md:w-[240px] lg:w-[245px] object-cover h-[260px] sm:h-[300px] md:h-[340px] lg:h-full lg:absolute lg:right-0 lg:bottom-16"
          />
        </div>
      </div>
    </div>
  );
}
