import dynamic from "next/dynamic";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import Form from "./Components/Forms/Form";
import { TypewriterEffectSmoothDemoHome } from "./Components/TextHome/Textwritter";
import Promo from "./Components/Promo/Promo";

const SkeletonFour = dynamic(() => import("./Components/Globe/SkeletonFour").then(mod => mod.SkeletonFour), { ssr: false });
const MoovingLogos = dynamic(() => import("./Components/MoovingLogos/MoovingLogos"));
const WobbleCardDemo = dynamic(() => import("./Components/WobbleCard/WoobleCardDemo").then(mod => mod.WobbleCardDemo));
const CardHoverEffectDemo = dynamic(() => import("./Components/ServicesDisplay/CardHoverEffectDemo").then(mod => mod.CardHoverEffectDemo));
const TimelineDemo = dynamic(() => import("./Components/StepperHowWeWork/TimelineDemo").then(mod => mod.TimelineDemo));


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
