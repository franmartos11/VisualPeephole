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


export default function Home() {
  return (
    <main >
      <NavbarDemo></NavbarDemo>
      
      <TypewriterEffectSmoothDemoHome></TypewriterEffectSmoothDemoHome>
      <CommingSoon></CommingSoon>
      <TabletHome></TabletHome>
      <GridLayout></GridLayout>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <WobbleCardDemo></WobbleCardDemo>
      <SkeletonFour></SkeletonFour>
      <MoovingLogos></MoovingLogos>
      <Form></Form>
      <Footer></Footer>
    </main>
  );
}
