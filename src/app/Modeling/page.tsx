import FeatureModeling from "../Components/FeatureModeling/FeatureModeling";
import ImgsExplicationModeling from "../Components/ImgsExplicationModeling/ImgsExplicationModeling";
import { TextModeling } from "../Components/TextModeling/TextModeling";

export default function Modeling(){
    return(
        <div>
            <TextModeling></TextModeling>
            <ImgsExplicationModeling></ImgsExplicationModeling>
            <FeatureModeling></FeatureModeling>

        </div>
    )
}