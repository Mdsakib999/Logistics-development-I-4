import AboutUs from "../../components/Home/AboutUs";
import Banner from "../../components/Home/Banner";
import OurService from "../../components/Home/OurService";
import ShippingExperience from "../../components/Home/ShippingExperience";
import Testimonials from "../../components/Home/Testimonials";

export default function Home(){
    return (
     <div className=""> 
        <Banner />
        <AboutUs />
        <OurService />
        <ShippingExperience />
        <Testimonials />
     </div>
    );
}