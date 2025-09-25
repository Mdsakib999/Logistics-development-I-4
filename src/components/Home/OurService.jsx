import Title from "../../utils/Title";

export default function OurService() {
  const services = [
    {
      name: "Ocean Shipping",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
    {
      name: "Air Freight",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
    {
      name: "Road Transport",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
    {
      name: "Warehousing",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
    {
      name: "Customs Clearance",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
    {
      name: "E-commerce Solutions",
      desc: "At FastGo, we believe in providing our clients with personalized and efficient logistics solut ions that meet their unique needs.",
      img: "https://i.ibb.co.com/qF38rYDm/Icon.png",
    },
  ];

  return (
    <div className="bg-[#EDF0F3] p-4 pt-10 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-10">
          <Title>Our services</Title>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-center">
            Efficient and Reliable Shipping with FastGo
          </div>
        </div>

        <div className="flex justify-around">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`w-full sm:w-[280px] md:w-[300px] lg:w-[326px] ${
                  i === 0 ? "bg-yellow-500 text-white" : "bg-white"
                } h-auto rounded-md shadow-md flex flex-col items-start p-4 sm:p-6 pt-8 sm:pt-10 space-y-4 
                transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-2xl flex items-center justify-center">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={service.img}
                    alt={service.name}
                  />
                </div>
                <div className="space-y-2">
                  <h3
                    className={`text-lg sm:text-xl md:text-[20px] font-semibold uppercase ${
                      i === 0 ? "text-white" : "text-yellow-400"
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
