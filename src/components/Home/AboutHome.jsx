import {
  ArrowRight,
  Award,
  Clock,
  Package,
  Shield,
  Truck,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import Countup from "../../utils/Countup";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function AboutHome() {
  const stats = [
    { icon: Package, value: 10, label: "Lieferungen", suffix: "K+" },
    { icon: Users, value: 500, label: "Zufriedene Kunden", suffix: "+" },
    { icon: Truck, value: 50, label: "Fahrzeuge", suffix: "+" },
    { icon: Award, value: 647, label: "Gewonnene Auszeichnungen", suffix: "+" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Fachwissen & Erfahrung",
      description:
        "Jahrelanges Branchenwissen, das Exzellenz bei jeder Lieferung garantiert",
    },
    {
      icon: Award,
      title: "Engagement für Qualität",
      description:
        "Hochwertige Servicestandards, die die Erwartungen stets übertreffen",
    },
    {
      icon: Clock,
      title: "Umfassende Dienstleistungen",
      description:
        "Ganzheitliche Logistiklösungen, die auf die Bedürfnisse Ihres Unternehmens zugeschnitten sind",
    },
  ];

  return (
    <div className="bg-gradient-to-br py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <Title>Über FastGo</Title>
            <Subtitle>
              Stärken Sie Ihr Unternehmen mit
              <span className="text-yellow-400">
                {" "}
                maßgeschneiderten Logistiklösungen
              </span>
            </Subtitle>

            <p className="text-lg text-gray-600 leading-relaxed">
              Bei FastGo glauben wir daran, unseren Kunden persönliche und
              effiziente Logistiklösungen zu bieten, die ihren individuellen
              Bedürfnissen entsprechen. Mit jahrelanger Erfahrung und einem Team
              von Experten.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold text-gray-900 opacity-75">
                    <Countup>{stat.value}</Countup>
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about">
              <button className="group bg-yellow-400 cursor-pointer text-white px-4 md:px-8 py-3 md:py-4 rounded-md font-semibold flex items-center gap-2 hover:shadow-lg">
                Erfahren Sie mehr über uns
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </Link>
          </div>

          {/* Right: Image with Overlay Card */}
          <div className="relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png"
                alt="Logistik"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating Award Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-4xl md:text-5xl  font-bold text-gray-900 opacity-80 mb-2">
                  <Countup>647</Countup>+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Ausgezeichnete Leistungen
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="text-yellow-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
