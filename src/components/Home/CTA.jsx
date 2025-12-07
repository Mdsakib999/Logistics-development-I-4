import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Subtitle from "../../utils/Subtitle";

export default function CTA() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8 text-white">
            <Subtitle>Logistikkommunikation neu gedacht.</Subtitle>

            <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
              FastGo hilft Ihnen, das Beste aus jeder Sendung herauszuholen –
              Echtzeit-Tracking, automatische Kundenupdates und nahtlose
              Übergaben, damit Ihre Lieferungen pünktlich ankommen und Ihre
              Kunden informiert bleiben.
            </p>

            <div className="flex items-center gap-4">
              <Link to="/signup">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-200 text-gray-800 bg-white shadow-sm hover:shadow-md transition">
                  FastGo kostenlos testen
                </button>
              </Link>

              <Link to="/demo">
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow hover:shadow-lg transition">
                  Demo buchen
                  <ArrowRight className="ml-3" size={18} />
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image layout matching the provided screenshot structure */}
          <div className="relative h-[420px]">
            {/* Top-right large image */}
            <div className="absolute top-0 right-0 w-[380px] h-[220px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="team planning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle-left small square */}
            <div className="absolute left-0 top-24 w-[160px] h-[160px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1616344787254-d4575aa102ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="customer phone"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right medium image */}
            <div className="absolute bottom-0 right-0 w-[320px] h-[180px] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="delivery checking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
