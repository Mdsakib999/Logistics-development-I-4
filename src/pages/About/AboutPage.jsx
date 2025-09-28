import AboutUs from "../../components/Home/AboutUs";
import Btn from "../../utils/Btn";
import Subtitle from "../../utils/Subtitle";
import Title from "../../utils/Title";
import Choose from "./Choose";
import AboutUsBanner from "./AboutUsBanner";
import FAQ from "./FAQ";


export default function AboutPage(){
    return (
     <div>
        <AboutUsBanner />
        <div className="mt-16">
            <AboutUs />
        </div>
        <Choose />
        <FAQ />
     </div>
    );
}