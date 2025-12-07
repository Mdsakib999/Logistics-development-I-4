import { FaStar } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";

export default function ShippingExperience() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start  gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div>
              <Subtitle>
                Vereinfachen Sie Ihre <br /> Versanderfahrung
              </Subtitle>
            </div>

            {/* Feature 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center lg:justify-start gap-2">
                Erfahrene Fachleute
                <span className="text-yellow-400 text-xs sm:text-sm font-bold">
                  01
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                eget donec erat ipsum a leo. Maecenas elementum consectetur ac
                blandit tortor.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center lg:justify-start gap-2">
                Maßgeschneiderte Lösungen
                <span className="text-yellow-400 text-xs sm:text-sm font-bold">
                  02
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                blandit tortor.
              </p>
              <hr className="mt-4 border-[#333]" />
            </div>

            {/* Feature 3 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold flex items-center justify-center lg:justify-start gap-2">
                Effizienz und Pünktlichkeit
                <span className="text-yellow-400 text-xs sm:text-sm font-bold">
                  03
                </span>
              </h3>
              <p className="text-[#808380] text-sm sm:text-base mt-2">
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                blandit tortor.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center space-y-4 ">
            <img
              src="https://i.ibb.co.com/BHr1YjL7/Image.png"
              alt="Truck"
              className="rounded-2xl w-full sm:w-[400px] h-[250px] sm:h-[350px] md:h-[420px] object-cover transform transition duration-900 hover:scale-105"
            />
            <div className="bg-[#111] rounded-2xl w-full sm:w-[400px] p-4 sm:p-6 text-center space-y-2 shadow-lg transform transition duration-900 hover:scale-105">
              <div className="flex justify-center gap-1 text-yellow-400">
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
                <FaStar size={18} className="sm:size-[20px] md:size-[22px]" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold">
                4.8/5 Bewertungen von Kunden
              </h4>
              <p className="text-[#808380] text-xs sm:text-sm">
                Lorem morbi et amet suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
