import Image from "next/image";
import { TabletHome } from "./Components/TabletHome/TabletHome";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";
import CommingSoon from "./Components/ComingSoon/CommingSoon";


export default function Home() {
  return (
    <main >
      <CommingSoon></CommingSoon>
    </main>
  );
}
