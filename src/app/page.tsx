import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";
import { SkeletonFour } from "./Components/Globe/SkeletonFour";
import { WobbleCardDemo } from "./Components/WobbleCard/WoobleCardDemo";
import Form from "./Components/Forms/Form";
import MoovingLogos from "./Components/MoovingLogos/MoovingLogos";
import { TypewriterEffectSmoothDemoHome } from "./Components/TextHome/Textwritter";
import { TimelineDemo } from "./Components/StepperHowWeWork/TimelineDemo";
import Promo from "./Components/Promo/Promo";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapComponent from "./Components/GoogleMaps/GoogleMapComponent";

export default function Home() {
  return (
    <main >
      <TypewriterEffectSmoothDemoHome></TypewriterEffectSmoothDemoHome>
      <GridLayout></GridLayout>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <WobbleCardDemo></WobbleCardDemo>
      <TimelineDemo></TimelineDemo>
      <Promo></Promo>
      <SkeletonFour></SkeletonFour>
      <MoovingLogos></MoovingLogos>
      <Form></Form>
      
    </main>
  );
}
