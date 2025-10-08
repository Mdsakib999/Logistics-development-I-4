import AboutHome from "../../components/Home/AboutHome";
import Banner from "../../components/Home/Banner";
import Experience from "../../components/Home/OurExperience";
import OurService from "../../components/Home/OurService";
import ShippingExperience from "../../components/Home/ShippingExperience";
import Testimonials from "../../components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />

      <div >
        <AboutHome />
        <OurService />
        <ShippingExperience />
        <Experience />
        <Testimonials />
      </div>
    </div>
  );
}
