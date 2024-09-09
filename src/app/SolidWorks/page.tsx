import FeatureSolidWorks from "../Components/FeatureSolidWorks/FeatureModeling";
import Form from "../Components/Forms/Form";
import ImageWithContent2SolidWorks from "../Components/ImageWithContentSolidWorks/ImageWithContent2SolidWorks";
import ImageWithContentSolidWorks from "../Components/ImageWithContentSolidWorks/ImageWithContentSolidWorks";
import ImgsExplicationSolidWorks from "../Components/ImgsExplicationSolidWorks/ImgsExplicationSolidWorks";
import Promo from "../Components/Promo/Promo";
import { TextSolidWorks } from "../Components/TextSolidWorks/TextSolidWorks";

export default function SolidWorks(){
    return(
        <div>
            <TextSolidWorks></TextSolidWorks>
            <ImgsExplicationSolidWorks></ImgsExplicationSolidWorks>
            <FeatureSolidWorks></FeatureSolidWorks>
            <ImageWithContent2SolidWorks></ImageWithContent2SolidWorks>
            <Promo></Promo>
            <ImageWithContentSolidWorks></ImageWithContentSolidWorks>
            <Form></Form>
        </div>
    )
}