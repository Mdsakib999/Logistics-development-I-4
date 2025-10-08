import Testimonials from "../../components/Home/Testimonials";
import ProcessSection from "./ProcessSection";
import ServiceBanner from "./ServiceBanner";
import ServicesSection from "./ServicesMain";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default function ServicesPage(){
    return (
     <> 
        <ServiceBanner />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsCarousel />
     </>
    );
}