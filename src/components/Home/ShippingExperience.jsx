import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";

export default function ShippingExperience() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto p-4 py-16">
        <div className="flex justify-between items-start gap-10">
          {/* Left Content */}
          <div className="w-1/2 space-y-8">
            <div>
              <Subtitle>
                Simplify Your <br /> Shipping Experience
              </Subtitle>
            </div>

            {/* Feature 1 */}
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                Experienced Professionals
                <span className="text-yellow-400 text-sm font-bold">01</span>
              </h3>
              <p className="text-[#808380] text-sm mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                Tailored Solutions
                <span className="text-yellow-400 text-sm font-bold">02</span>
              </h3>
              <p className="text-[#808380] text-sm mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                Efficiency and Timeliness
                <span className="text-yellow-400 text-sm font-bold">03</span>
              </h3>
              <p className="text-[#808380] text-sm mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-1/2 flex flex-col items-center space-y-2">
            {/* Truck Image */}
            <img
              src="https://i.ibb.co.com/BHr1YjL7/Image.png"
              alt="Truck"
              className="rounded-2xl w-[400px] h-[420px] object-cover"
            />

            {/* Rating Card */}
            <div className="bg-[#111] rounded-2xl w-[400px] p-6 text-center space-y-2 shadow-lg">
              <div className="flex justify-center gap-1 text-yellow-400">
                <FaStar size={22} />
                <FaStar size={22} />
                <FaStar size={22} />
                <FaStar size={22} />
                <FaStar size={22} />
              </div>
              <h4 className="text-lg font-semibold">
                4.8/5 Ratings from Customers
              </h4>
              <p className="text-[#808380] text-sm">
                Lorem morbi et amet suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
