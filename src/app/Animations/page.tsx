import FeatureAnimations from "../Components/FeatureAnimations/FeatureAnimations";
import Form from "../Components/Forms/Form";
import ImageWithContent2Animations from "../Components/ImageWithContentAnimations/ImageWithContent2Animations";
import ImageWithContentAnimations from "../Components/ImageWithContentAnimations/ImageWithContentAnimations";
import ImgsExplicationAnimations from "../Components/ImgsExplicationAnimations/ImgsExplicationAnimations";
import ImgsExplicationInterior from "../Components/ImgsExplicationInterior/ImgsExplicationInterior";
import Promo from "../Components/Promo/Promo";
import { TextAnimations } from "../Components/TextAnimations/TextAnimations";

export default function Animations(){
    return(
        <div>
            <TextAnimations></TextAnimations>
            <ImgsExplicationAnimations></ImgsExplicationAnimations>
            <FeatureAnimations></FeatureAnimations>
            <ImageWithContentAnimations></ImageWithContentAnimations>
            <Promo></Promo>
            <ImageWithContent2Animations></ImageWithContent2Animations>
            <Form></Form>
        </div>
    )
}