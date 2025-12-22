import { IoLocationSharp } from "react-icons/io5";

export default function ContactLocation() {
  const features = [
    {
      title: "Hauptsitz Nordamerika",
      description:
        "Unser zentraler Knotenpunkt für Frachtoperationen in den USA, Kanada und Mexiko gewährleistet nahtlose grenzüberschreitende Logistik.",
    },
    {
      title: "Europäisches Büro",
      description:
        "Bedienung von Kunden in der gesamten EU mit effizienten und skalierbaren Frachtlösungen, die auf regionale Logistik zugeschnitten sind.",
    },
    {
      title: "Asien-Pazifik-Hub",
      description:
        "Strategisch gelegen zur Verwaltung von grenzüberschreitendem Versand und Logistik in Südasien, Südostasien und Ozeanien.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase text-center md:text-left pb-7">
          Standort
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center md:text-left">
            <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-3"
              >
                <IoLocationSharp size={44} className="text-yellow-500" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Adresse
                  </h3>
                  <p className="text-[#808380] text-sm sm:text-base mt-2">
                    Schloßstr. 5, 92364 Deining
                  </p>

                    <hr className="mt-4 border-[#333]" />

                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-3"
              >
                <IoLocationSharp size={44} className="text-yellow-500" />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Email
                  </h3>
                  <p className="text-[#808380] text-sm sm:text-base mt-2">
                    info@intern-transport.de
                  </p>

                    <hr className="mt-4 border-[#333]" />

                </div>
            </div>
          </div>

          {/* Right Content (Map) */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="company-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83401.4504325636!2d11.5370198!3d49.21392605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f713dcb4b75f1%3A0xacef54f95f359036!2s92364%20Deining%2C%20Germany!5e0!3m2!1sen!2sbd!4v1766397802968!5m2!1sen!2sbd" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
