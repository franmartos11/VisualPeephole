"use client";
import FeatureExteriorBim from "../Components/FeatureExteriorBim/FeatureExteriorBim";
import Form from "../Components/Forms/Form";
import ImageWithContentBim from "../Components/ImageWithContentBim/ImageWithContentBim";
import ImageWithContentBim2 from "../Components/ImageWithContentBim/ImageWithContentBim2";
import ImgsExplicationBim from "../Components/ImgsExplicationBim/ImgsExplicationBim";
import Promo from "../Components/Promo/Promo";
import PromoBim from "../Components/PromoBim/PromoBim";
import { TextBim } from "../Components/TextBim/TextBim";


export default function bim(){
    return(
        <>
        <TextBim></TextBim>
        <ImgsExplicationBim></ImgsExplicationBim>
        <FeatureExteriorBim></FeatureExteriorBim>
        <ImageWithContentBim></ImageWithContentBim>
        <PromoBim></PromoBim>
        <ImageWithContentBim2></ImageWithContentBim2>
        <Form></Form>
        </>
    )
}