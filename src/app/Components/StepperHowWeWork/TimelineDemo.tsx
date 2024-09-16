import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";
export function TimelineDemo() {
  const data = [
    {
      title: "Initial Consultation",
      content: (
        <div>
          <p className=" text-xs md:text-lg  mb-8">
            We begin by discussing your project requirements to understand your vision, objectives, and specific needs. This includes gathering detailed information on style preferences, format, and deadlines.</p>
          <div  >
            <Image
              src="/peopleWorking3.jpg"
              alt="People Working"
              width={1000}
              height={1000}
              className="rounded-lg object-cover h-40 md:h-80 lg:h-[25rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Concept Development",
      content: (
        <div>
          <p className="text-xs md:text-lg  mb-8">
            Our team creates preliminary sketches or digital mockups based on the initial consultation. <strong> You can request up to three rounds of revisions</strong> to ensure the mockups align with your vision before moving to production.
          </p>

          <div>

            <Image
              src="/View01_override.jpg"
              alt="People Working"
              width={1000}
              height={1000}
              className="rounded-lg object-cover h-40 md:h-80 lg:h-[25rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Rendering Production",
      content: (
        <div>
          <p className="text-xs md:text-lg  mb-8">
            Once the concepts are approved, we produce high-quality, detailed visuals using advanced software and techniques. We provide regular updates to keep the project on track and aligned with your expectations.
          </p>

          <div >

            <Image
              src="/View01.jpg"
              alt="People Working"
              width={1000}
              height={1000}
              className="rounded-lg object-cover h-40 md:h-80 lg:h-[25rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />


          </div>
        </div>
      ),
    },
    {
      title: "Final Review and Delivery",
      content: (
        <div>
          <p className="text-xs md:text-lg mb-8">
            The completed concepts are presented for final approval. We review the project to confirm all objectives are met and discuss potential future collaborations.</p>

          <div>


            <Image
              src="/handshake.jpg"
              alt="People Working"
              width={1000}
              height={1000}
              className="rounded-lg object-cover h-40 md:h-80 lg:h-[25rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full gowun-batang-regular">
      <Timeline data={data} />
    </div>
  );
}
