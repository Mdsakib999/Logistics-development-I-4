import { Link } from "react-router";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";

export default function AboutUsBanner() {
  return (
    <div className="py-10 bg-white">
      {/* Text constrained to max-w-7xl and centered like your design system */}
      <div className="max-w-7xl mx-auto px-4  ">
        <div className="w-full lg:w-7/12 space-y-5 text-center lg:text-left">
          <Subtitle>Everything you need we have</Subtitle>
        </div>
      </div>

      {/* Full-bleed image below the subtitle — centered and spanning the viewport */}
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 mt-8">
        <div
          className="h-[300px] sm:h-[400px] md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
          role="img"
          aria-label="Logistics illustration"
        />
      </div>
    </div>
  );
}
