import React from "react";
import { Compare } from "./Compare2"; 

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl  px-4">
      <Compare
        firstImage="b.jpg"
        secondImage="renderOut.webp"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
