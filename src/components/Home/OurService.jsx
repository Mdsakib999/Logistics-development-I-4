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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
            {services.map((service, i) => (
              <div
                key={i}
                // 🟡 Added group for group-hover styling
                className={`group w-full sm:w-[270px] md:w-[300px] lg:w-[326px] ${
                  i === 0
                    ? "bg-yellow-500 text-white hover:bg-white hover:text-black"
                    : "bg-white hover:bg-yellow-500 hover:text-white"
                } h-auto rounded-md shadow-md flex flex-col items-start p-4 sm:p-6 pt-8 sm:pt-10 space-y-4 hover:shadow-lg transition duration-300`}
              >
                <div className="w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-2xl flex items-center justify-center">
                  <img
                    className="rounded-xl w-full h-full object-cover"
                    src={service.img}
                  />
                </div>
                <div className="space-y-2">
                  <h3
                    // 🟡 Fixed: title now changes with card hover (always visible)
                    className={`text-lg sm:text-xl md:text-[20px] font-semibold uppercase ${
                      i === 0
                        ? "text-white group-hover:text-yellow-500"
                        : "text-yellow-500 group-hover:text-white"
                    } transition duration-300`}
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
