import FeatureExteriorRender from "../Components/FeatureExteriorRender/FeatureExteriorRender";
import Form from "../Components/Forms/Form";
import ImageWithContent from "../Components/ImageWithContent/ImageWithContent";
import ImageWithContent2 from "../Components/ImageWithContent/ImageWithContent2";
import ImgsExplication from "../Components/ImgsExplication/ImgsExplication";
import Promo from "../Components/Promo/Promo";
import { TypewriterEffectSmoothDemo } from "../Components/Text/Textwritter";
export default function ExteriorRenders() {
  return (
    <main >
        <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
        <ImgsExplication></ImgsExplication>
        <FeatureExteriorRender></FeatureExteriorRender>
        <ImageWithContent></ImageWithContent>
        <Promo></Promo>
        <ImageWithContent2></ImageWithContent2>
        <Form></Form>
    </main>
  );
}
