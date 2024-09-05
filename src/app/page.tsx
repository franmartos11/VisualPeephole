import { TabletHome } from "./Components/TabletHome/TabletHome";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";
import CommingSoon from "./Components/ComingSoon/CommingSoon";
import { SkeletonFour } from "./Components/Globe/SkeletonFour";
import { NavbarDemo } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { WobbleCardDemo } from "./Components/WobbleCard/WoobleCardDemo";
import Form from "./Components/Forms/Form";
import MoovingLogos from "./Components/MoovingLogos/MoovingLogos";
import { TypewriterEffectSmoothDemoHome } from "./Components/TextHome/Textwritter";
import { TimelineDemo } from "./Components/StepperHowWeWork/TimelineDemo";
import { ParallaxScrollDemo } from "./Components/ParalaxScroll/ParalaxScrollDemo";


export default function Home() {
  return (
    <main >
      <TypewriterEffectSmoothDemoHome></TypewriterEffectSmoothDemoHome>
      <GridLayout></GridLayout>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <WobbleCardDemo></WobbleCardDemo>
      <TimelineDemo></TimelineDemo>
      <SkeletonFour></SkeletonFour>
      <MoovingLogos></MoovingLogos>
      <Form></Form>
    </main>
  );
}
