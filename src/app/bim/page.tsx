"use client";
import FeatureExteriorBim from "../Components/FeatureExteriorBim/FeatureExteriorBim";
import Form from "../Components/Forms/Form";
import ImageWithContentBim from "../Components/ImageWithContentBim/ImageWithContentBim";
import ImageWithContentBim2 from "../Components/ImageWithContentBim/ImageWithContentBim2";
import ImgsExplicationBim from "../Components/ImgsExplicationBim/ImgsExplicationInterior";
import Promo from "../Components/Promo/Promo";
import { TextBim } from "../Components/TextBim/TextBim";


export default function bim(){
    return(
        <>
        <TextBim></TextBim>
        <ImgsExplicationBim></ImgsExplicationBim>
        <FeatureExteriorBim></FeatureExteriorBim>
        <ImageWithContentBim></ImageWithContentBim>
        <Promo></Promo>
        <ImageWithContentBim2></ImageWithContentBim2>
        <Form></Form>
        </>
    )
}