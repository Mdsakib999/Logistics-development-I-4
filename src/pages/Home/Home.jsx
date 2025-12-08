import AboutHome from "../../components/Home/AboutHome";
import Banner from "../../components/Home/Banner";
import ContactForm from "../../components/Home/ContactForm";
import CTA from "../../components/Home/CTA";
import Experience from "../../components/Home/OurExperience";
import OurService from "../../components/Home/OurService";
import ShippingExperience from "../../components/Home/ShippingExperience";
import Testimonials from "../../components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutHome />
      <OurService />
      <ShippingExperience />
      <Experience />
      <CTA />
      <Testimonials />
      <ContactForm />
    </div>
  );
}
