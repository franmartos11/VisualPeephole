import Image from "next/image";
import { TabletHome } from "./Components/TabletHome/TabletHome";
import { GridLayout } from "./Components/GridLayout/GridLayout";
import { CardHoverEffectDemo } from "./Components/ServicesDisplay/CardHoverEffectDemo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <TabletHome></TabletHome>
      <GridLayout></GridLayout>
      <CardHoverEffectDemo></CardHoverEffectDemo>
    </main>
  );
}
