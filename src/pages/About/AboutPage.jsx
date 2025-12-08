import AboutUs from "./AboutUs";
import Choose from "./Choose";
import FAQ from "./FAQ";
import OurValues from "./OurValues";

export default function AboutPage() {
  return (
    <div>
      <div className="mt-16">
        <AboutUs />
      </div>
      <Choose />
      <OurValues />
      <FAQ />
    </div>
  );
}
