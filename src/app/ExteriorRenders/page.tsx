import FeatureExteriorRender from "../Components/FeatureExteriorRender/FeatureExteriorRender";
import Footer from "../Components/Footer/Footer";
import Form from "../Components/Forms/Form";
import ImageWithContent from "../Components/ImageWithContent/ImageWithContent";
import ImageWithContent2 from "../Components/ImageWithContent/ImageWithContent2";
import { NavbarDemo } from "../Components/Navbar/Navbar";
import { ParallaxScrollDemo } from "../Components/ParalaxScroll/ParalaxScrollDemo";
import { TypewriterEffectSmoothDemo } from "../Components/Text/Textwritter";
export default function ExteriorRenders() {
  return (
    <main >
        
        <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
        <FeatureExteriorRender></FeatureExteriorRender>
        <ImageWithContent></ImageWithContent>
        <ImageWithContent2></ImageWithContent2>
        
        <Form></Form>
        
    </main>
  );
}
