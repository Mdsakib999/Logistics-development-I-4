import OurService from "../../components/Home/OurService";
import Testimonials from "../../components/Home/Testimonials";
import Choose from "./Choose";
import ServiceBanner from "./ServiceBanner";

export default function ServicesPage(){
    return (
     <> 
        <ServiceBanner />
        <OurService />
        <Choose />
        <Testimonials />
     </>
    );
}