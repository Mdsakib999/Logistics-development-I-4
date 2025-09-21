import AboutUs from "../../components/Home/AboutUs";
import Banner from "../../components/Home/Banner";
import OurService from "../../components/Home/OurService";

export default function Home(){
    return (
     <div className=""> 
        <Banner />
        <AboutUs />
        <OurService />
     </div>
    );
}