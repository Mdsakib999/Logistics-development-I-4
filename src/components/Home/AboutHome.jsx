import { Award, Truck, Shield, Clock, ArrowRight, Package, Users } from "lucide-react";
import Title from "../../utils/Title";
import Subtitle from "../../utils/Subtitle";
import Btn from "../../utils/Btn";
import Countup from "../../utils/Countup";


export default function AboutHome() {
  const stats = [
  { icon: Package, value: 10, label: "Deliveries", suffix: "K+" },
  { icon: Users, value: 500, label: "Happy Clients", suffix: "+" },
  { icon: Truck, value: 50, label: "Vehicles", suffix: "+" },
  { icon: Award, value: 647, label: "Awards Won", suffix: "+" }
];

  const features = [
    {
      icon: Shield,
      title: "Expertise & Experience",
      description: "Years of industry knowledge delivering excellence in every shipment"
    },
    {
      icon: Award,
      title: "Committed to Quality",
      description: "Premium service standards that exceed expectations consistently"
    },
    {
      icon: Clock,
      title: "Comprehensive Services",
      description: "End-to-end logistics solutions tailored to your business needs"
    }
  ];

  return (
    <div className="bg-gradient-to-br py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Text Content */}
          <div className="space-y-6">
            <Title>About FastGo</Title>
            <Subtitle>Empowering Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500"> Tailored Logistics</span></Subtitle>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At FastGo, we believe in providing our clients with personalized and
              efficient logistics solutions that meet their unique needs. With
              years of experience and a team of experts.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold text-gray-900 opacity-75">
  <Countup>{stat.value}</Countup>{stat.suffix}
</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg ">
              Learn More About Us
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            
          </div>

          {/* Right: Image with Overlay Card */}
          <div className="relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.ibb.co.com/RkKfDVB3/Frame-1000007304-1.png"
                alt="Logistics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Award Card */}
              <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2"><Countup>647</Countup>+</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Awards Winning
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="text-yellow-600" size={28} />
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