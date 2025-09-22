export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Company Info */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white uppercase">Ekspress</h2>
          <p className="text-sm leading-relaxed">
            At FastGo, we believe in providing our clients with personalized and
            efficient logistics solutions that meet their unique needs.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-3 text-center md:text-left mx-auto">
          <h4 className="text-lg font-semibold text-white uppercase">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm ">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Recent Project */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-lg font-semibold uppercase text-white">
            Recent Project
          </h4>
          <div className="flex gap-3 justify-center md:justify-start">
            <div className="w-36 h-24 bg-gray-900 rounded-lg"></div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold text-white uppercase">
            Subscribe Us
          </h4>
          <form className="space-y-1">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="bg-white text-gray-800 focus:text-black placeholder-gray-500 text-sm px-5 py-3 rounded-md w-52 focus:outline-none"
            />
            <br />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm px-5 py-3 rounded-md w-52 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Ekspress. All rights reserved.
      </div>
    </footer>
  );
}
