import Image from "next/image";
import { TabletHome } from "./Components/TabletHome/TabletHome";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";
import CommingSoon from "./Components/ComingSoon/CommingSoon";
import { SkeletonFour } from "./Components/Globe/SkeletonFour";
import { NavbarDemo } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { WobbleCard } from "./Components/WobbleCard/Wooble";
import { WobbleCardDemo } from "./Components/WobbleCard/WoobleCardDemo";
import Form from "./Components/Forms/Form";


export default function Home() {
  return (
    <main className="" >
      <CommingSoon></CommingSoon>
      <NavbarDemo></NavbarDemo>
      <TabletHome></TabletHome>
      <GridLayout></GridLayout>
      
      <CardHoverEffectDemo></CardHoverEffectDemo>
      
      <WobbleCardDemo></WobbleCardDemo>
      <SkeletonFour></SkeletonFour>
      <Form></Form>
    </main>
  );
}
