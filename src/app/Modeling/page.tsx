import FeatureModeling from "../Components/FeatureModeling/FeatureModeling";
import Form from "../Components/Forms/Form";
import ImageWithContent2Modeling from "../Components/ImageWithContentModeling/ImageWithContent2Modeling";
import ImageWithContentModeling from "../Components/ImageWithContentModeling/ImageWithContentModeling";
import ImgsExplicationModeling from "../Components/ImgsExplicationModeling/ImgsExplicationModeling";
import Promo from "../Components/Promo/Promo";
import { TextModeling } from "../Components/TextModeling/TextModeling";

export default function Modeling(){
    return(
        <div>
            <TextModeling></TextModeling>
            <ImgsExplicationModeling></ImgsExplicationModeling>
            <FeatureModeling></FeatureModeling>
            <ImageWithContent2Modeling></ImageWithContent2Modeling>
            <Promo></Promo>
            <ImageWithContentModeling></ImageWithContentModeling>
            <Form></Form>
        </div>
    )
}