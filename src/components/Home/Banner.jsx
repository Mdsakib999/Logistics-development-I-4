import Countup from "../../utils/Countup";

export default function Banner() {
  return (
    <div
      id="banner-section"
      className="h-[500px] sm:h-[600px] lg:h-[741px] bg-cover bg-center relative px-3 md:px-10 "
      style={{
        backgroundImage: "url('/banner.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl mx-auto left-0 top-20 md:top-30 lg:top-40 text-white space-y-6">
        {/* Title section */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80">
            We are best logistic company
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-snug lg:leading-tight">
            Streamline Your Shipping with Our Cargo Services
          </h1>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Simplify your shipping process and make it more efficient with our
            cargo services. From start to finish, we'll handle everything to
            ensure your cargo arrives safely.
          </p>
        </div>

        <div className="flex justify-center lg:justify-start">
          <div className="flex bg-white text-black flex-row items-center gap-6 rounded-md shadow-lg p-4 sm:p-6 w-64 h-20 sm:w-fit sm:h-fit mx-auto lg:mx-0 absolute top-60">
            <img
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-md object-cover"
              src="https://i.ibb.co.com/xSvBxQsm/Image-2.png"
              alt="Client"
            />

            <div className="text-center">
              <h2 className="font-bold text-2xl sm:text-4xl">
                <Countup>26</Countup>K
              </h2>
              <p className="text-sm font-medium opacity-70">
                Satisfied Clients
              </p>
            </div>

            <div className="hidden sm:block w-px h-12 sm:h-16 bg-gray-300"></div>

            <div className="text-center">
              <h2 className="font-bold text-2xl sm:text-4xl">
                <Countup>12</Countup>+
              </h2>
              <p className="text-xs sm:text-sm font-medium opacity-70">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
