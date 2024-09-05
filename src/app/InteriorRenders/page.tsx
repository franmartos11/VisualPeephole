import FeatureInteriorRender from "../Components/FeatureInteriorRender/FeatureInteriorRender";
import Form from "../Components/Forms/Form";
import ImageWithContent2Interior from "../Components/ImageWithContentInterior/ImageWithContent2Interior";
import ImageWithContentInterior from "../Components/ImageWithContentInterior/ImageWithContentInterior";
import ImgsExplicationInterior from "../Components/ImgsExplicationInterior/ImgsExplicationInterior";
import Promo from "../Components/Promo/Promo";
import { TextInteriorRender } from "../Components/TextInteriorRender/TextInteriorRender";

export default function InteriorRenders(){
    return(
        <div>
            <TextInteriorRender></TextInteriorRender>
            <ImgsExplicationInterior></ImgsExplicationInterior>
            <FeatureInteriorRender></FeatureInteriorRender>
            <ImageWithContentInterior></ImageWithContentInterior>
            <Promo></Promo>
            <ImageWithContent2Interior></ImageWithContent2Interior>
            <Form></Form>
        </div>
    )
}