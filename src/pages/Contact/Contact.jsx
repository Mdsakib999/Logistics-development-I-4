import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Title from "../../utils/Title";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-10">
      <div className="flex justify-between items-center">
        {/* Left section */}
        <div className="w-2/3 space-y-3">
          <Title>Loslegen</Title>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-left">
            Kontaktieren Sie uns. Wir sind hier, um Ihnen zu helfen.
          </h1>
        </div>

        {/* Right section - Social icons */}
        <div className="flex flex-col gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full transform hover:scale-110 bg-blue-600 text-white transition duration-300"
          >
            <FaFacebookF className="text-lg" />
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded-full transform hover:scale-110 bg-gradient-to-tr from-pink-500 to-orange-400 text-white transition duration-300"
          >
            <FaInstagram className="text-lg" />
          </a>

          {/* Twitter */}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full bg-sky-500 text-white transition duration-300 transform hover:scale-110"
          >
            <FaTwitter className="text-lg" />
          </a>
        </div>
      </div>

      {/* form section */}
      <ContactForm />
      <ContactLocation />
    </div>
  );
}
