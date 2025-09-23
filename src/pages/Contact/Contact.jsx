import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-10">
        {/* info section  */}
      <div className="flex justify-between items-center">
        {/* Left section */}
        <div className="w-2/3 space-y-3">
          <Title>Get started</Title>
          <Subtitle>
            Get in touch with us. We're here to assist you.
          </Subtitle>
        </div>

        {/* Right section - Social icons */}
        <div className="flex flex-col gap-3 ">
          <a href="#" className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full hover:bg-blue-600 hover:text-white transition">
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full hover:bg-pink-500 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* form section  */}
      <ContactForm />
      <ContactLocation />
    </div>
  );
}
