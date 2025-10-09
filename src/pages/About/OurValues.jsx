import { Award, Shield, Users, Zap, Star, Eye } from "lucide-react";
import Subtitle from "../../utils/Subtitle";

const values = [
  {
    icon: Award,
    name: "Quality",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
  {
    icon: Shield,
    name: "Commitment",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
  {
    icon: Users,
    name: "Teamwork",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
  {
    icon: Zap,
    name: "Innovation",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
  {
    icon: Star,
    name: "Leadership",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
  {
    icon: Eye,
    name: "Openness",
    desc: "Lorem ipsum dolor sit amet lorem consectetur adipiscing elit est vel semper nam porta arcu.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: two-column on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <Subtitle>
              The values that drive <br className="hidden md:block" />
              everything we do<span className="text-yellow-400">.</span>
            </Subtitle>
          </div>

          <div className="text-gray-600 max-w-lg lg:ml-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit tellus sem
              pellentesque ac nulla tortor nulla non cursus hendrerit urna
              tristique et tristique.
            </p>
          </div>
        </div>

        {/* Values grid: 3 columns on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-transform duration-200"
              >
                <div className="mb-6">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {v.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
