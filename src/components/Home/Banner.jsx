export default function Banner() {
  return (
    <div
      className="h-[741px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://i.ibb.co.com/dwtFQQSM/pexels-chanaka-906494.jpg)`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-5xl mx-auto left-0 top-40 text-white space-y-6">
        {/* Title section */}
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest opacity-80">
            We are best logistic company
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold uppercase leading-tight">
            Streamline Your Shipping with Our Cargo Services
          </h1>
          <p className="text-base leading-relaxed max-w-2xl">
            Simplify your shipping process and make it more efficient with our
            cargo services. From start to finish, we'll handle everything to
            ensure your cargo arrives safely.
          </p>
        </div>

        {/* Info card */}
        <div className="bg-white text-black flex items-center gap-6 rounded-md shadow-lg p-6 w-fit">
          {/* Image */}
          <img
            className="w-[80px] h-[80px] rounded-md object-cover"
            src="https://i.ibb.co.com/xSvBxQsm/Image-2.png"
            alt="Client"
          />

          {/* Satisfied Clients */}
          <div className="text-center">
            <h2 className="font-bold text-4xl">26K</h2>
            <p className="text-sm font-medium opacity-70">Satisfied Clients</p>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-gray-300"></div>

          {/* Years of Experience */}
          <div className="text-center">
            <h2 className="font-bold text-4xl">12+</h2>
            <p className="text-sm font-medium opacity-70">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
