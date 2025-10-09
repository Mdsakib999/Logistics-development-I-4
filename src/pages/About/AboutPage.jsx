import AboutUs from "./AboutUs";
import Choose from "./Choose";
import AboutUsBanner from "./AboutUsBanner";
import FAQ from "./FAQ";
import OurValues from "./OurValues";

export default function AboutPage() {
  return (
    <div>
      {/* <AboutUsBanner /> */}
      <div className="mt-16">
        <AboutUs />
      </div>
      <Choose />
      <OurValues />
      <FAQ />
    </div>
  );
}
