import Image from "next/image";
import { TabletHome } from "./Components/TabletHome/TabletHome";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";
import CommingSoon from "./Components/ComingSoon/CommingSoon";
import { SkeletonFour } from "./Components/Globe/SkeletonFour";
import { NavbarDemo } from "./Components/Navbar/Navbar";


export default function Home() {
  return (
    <main className="" >
      <CommingSoon></CommingSoon>
      <NavbarDemo></NavbarDemo>
      <TabletHome></TabletHome>
      <GridLayout></GridLayout>
      <CardHoverEffectDemo></CardHoverEffectDemo>
      <SkeletonFour></SkeletonFour>
    </main>
  );
}
