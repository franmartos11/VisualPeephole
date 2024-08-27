"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./Wooble"; 
 
export function WobbleCardDemo() {
  return (
    <div className="p-[1rem]">
      <h3 className=" pt-[10rem]  text-4xl font-semibold  text-center">
         What Sets Us Apart
      </h3>
    
    <div className="grid grid-cols-1 pt-[5rem] lg:grid-cols-3 gap-4 max-w-[74rem] mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#000] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Affordable Prices
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          With our cost-effective solutions, you don t need an in-house 3D visualization department. We offer high-quality services at a fraction of the cost.
          </p>
        </div>
        <Image
          src="/render2.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%]  -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#000]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Quick Turnarounds
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Our streamlined processes ensure fast delivery without compromising on quality, so you get your projects completed on time.
        
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-[#000] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          High Definition Services
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We provide top-notch 3D visualization services with high-definition results, making sure your projects stand out with stunning clarity.
          </p>
        </div>
        <Image
          src="/render2.jpeg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[10%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    </div>
  );
}