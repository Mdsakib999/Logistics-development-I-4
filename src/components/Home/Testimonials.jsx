import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function Testimonials() {
  return (
    <div class="max-w-7xl mx-auto flex justify-between items-center px-2 py-10">
      {/* left side  */}
      <div className="w-1/2 space-y-5">
        <div>
          <Title>Testimonials</Title>
          <Subtitle>Our Clients Speak for Us</Subtitle>
        </div>
        <div className=" border-amber-800 relative mt-16">
          <img
            className="w-24 h-24 absolute -right-8 -top-8"
            src="https://i.ibb.co.com/gLN2d2br/Icon-1.png"
            alt=""
          />
          <img
            className="w-[620px] h-[440px]"
            src="https://i.ibb.co.com/603111dW/Image-3.png"
            alt=""
          />
        </div>

        {/* Rating Card */}
        <div className="bg-[#111] rounded-2xl w-full p-6 space-y-4 shadow-lg text-white">
          <div className="flex gap-1 text-yellow-400">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
          </div>
          <p className="opacity-85 text-sm">
            I have been using FastGo cargo logistic & transportation services
            for over a year now and I am extremely satisfied with their service.
            They are efficient, reliable, and always deliver on time. I highly
            recommend them to anyone in need of logistics services.
          </p>
          <h4 className="text-lg font-semibold">John Doe, Business Owner</h4>
        </div>
      </div>

      {/* right side  */}
      <div className="w-5/12 space-y-3">
        <div className=" rounded-2xl w-full p-6 px-12 border border-gray-300 shadow-lg space-y-4">
          <div className="flex justify-start gap-2 text-yellow-400">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
          </div>
          <p className="text-sm">
            I have been using FastGo cargo logistic & transportation services
            for over a year now and I am extremely satisfied with their service.
            They are efficient, reliable, and always deliver on time. I highly
            recommend them to anyone in need of logistics services.
          </p>
          <h4 className="text-lg font-semibold">Jane Smith, Freelance Consultant</h4>
        </div>
        <div className=" rounded-2xl w-full p-6 px-12 border border-gray-300 shadow-lg space-y-4">
          <div className="flex justify-start gap-2 text-yellow-400">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
          </div>
          <p className="text-sm">
            I have been using FastGo cargo logistic & transportation services
            for over a year now and I am extremely satisfied with their service.
            They are efficient, reliable, and always deliver on time. I highly
            recommend them to anyone in need of logistics services.
          </p>
          <h4 className="text-lg font-semibold">Michael Johnson, CEO</h4>
        </div>
        <div className=" rounded-2xl w-full p-6 px-12 border border-gray-300 shadow-lg space-y-4">
          <div className="flex justify-start gap-2 text-yellow-400">
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
            <FaStar size={24} />
          </div>
          <p className="text-sm">
            I have been using FastGo cargo logistic & transportation services
            for over a year now and I am extremely satisfied with their service.
            They are efficient, reliable, and always deliver on time. I highly
            recommend them to anyone in need of logistics services.
          </p>
          <h4 className="text-lg font-semibold">John Doe, Business Owner</h4>
        </div>
      </div>
    </div>
  );
}
