import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function Choose() {
  const features = [
    {
      number: "1.",
      title: "Zollabfertigung",
      desc: "Entdecken Sie unser umfassendes Angebot an Charterdiensten. Entdecken Sie unser umfassendes Angebot an Charterdiensten.",
    },
    {
      number: "2.",
      title: "Lagerung & Verpackung",
      desc: "Entdecken Sie unser umfassendes Angebot an Charterdiensten. Entdecken Sie unser umfassendes Angebot an Charterdiensten.",
    },
    {
      number: "3.",
      title: "Transportvermittlung",
      desc: "Entdecken Sie unser umfassendes Angebot an Charterdiensten. Entdecken Sie unser umfassendes Angebot an Charterdiensten.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
        {/* Left Content */}
        <div className="w-full lg:w-6/12 space-y-5 text-center lg:text-left">
          <Title>WARUM UNS WÄHLEN</Title>
          <Subtitle>Nahtloser Service für eine vernetzte Welt</Subtitle>
          <p className="text-sm md:text-base text-[#5C6C7B] max-w-xl mx-auto lg:mx-0">
            Bei FastGo glauben wir daran, unseren Kunden personalisierte und
            effiziente Logistiklösungen zu bieten, die ihren einzigartigen
            Bedürfnissen entsprechen. Mit jahrelanger Erfahrung und einem Team
            von Experten sind wir bestrebt, Ihr Unternehmen mit nahtlosen
            Versanderfahrungen zu stärken.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <img
            src="https://i.ibb.co.com/PZr9jDXv/wireframe-Logistik-icons-1.png"
            alt="why choose us"
            className="rounded-2xl w-[250px] sm:w-[300px] md:w-[350px] lg:w-[380px] h-auto transition hover:-rotate-2 duration-1000"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-xl px-6 flex-co  gap-5 sm:gap-6 w-full border border-gray-300 py-10 mt-4 relative hover:bg-yellow-300 hover:text-black"
            >
              <div className="font-bold text-xl sm:text-2xl md:text-3xl absolute w-14 h-12 rounded-xl bg-black text-white -top-8 flex items-center justify-center">
                {item.number}
              </div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-md sm:text-lg md:text-xl lg:text-3xl tracking-wide text-left">
                    {item.title}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font- text-base md:text-md lg:text-md tracking-wide text-left">
                    {item.desc}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
