"use client";
import React from "react";
import { ContainerScroll } from "./ContainerScroll"; 
import Image from "next/image";

export function TabletHome() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-3xl font-semibold text-black dark:text-white pt-[2rem]">
            Conveying Purposes & Abstractions <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Visual Peephole
              </span>
            </h1>
          </>
        }
      >
        <div className="relative mx-auto rounded-2xl overflow-hidden">
          <video
            src={'/VideoHomeTablet.mp4'} 
            className="w-full h-auto object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      </ContainerScroll>
    </div>
  );
}
