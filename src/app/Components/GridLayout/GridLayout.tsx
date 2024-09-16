"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./Layout";

export function GridLayout() {
  return (
    <div className="h-screen py-20 w-full">
      <h2 className=" pb-[1rem] text-4xl gowun-batang-bold text-black  text-center"> We provide 3D services for architectural and engineering projects</h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl gowun-batang-regular text-xl text-white">
        Modern Residential Building
      </p>
      <p className="font-normal  gowun-batang-regular text-base text-white"></p>
      <p className="font-normal gowun-batang-regular  text-base my-4 max-w-lg text-neutral-200">
        Modern multi-story residential building with numerous windows and balconies.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl gowun-batang-regular text-xl text-white">
        Modern Living Room
      </p>
      <p className="font-normal gowun-batang-regular text-base text-white"></p>
      <p className="font-normal gowun-batang-regular text-base my-4 max-w-lg text-neutral-200">
        Modern living room with a high ceiling, exposed wooden beams, and large windows that allow ample natural light to enter.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl gowun-batang-regular text-white">
        Cozy Modern Living Room
      </p>
      <p className="font-normal gowun-batang-regular  text-base text-white"></p>
      <p className="font-normal gowun-batang-regular text-base my-4 max-w-lg text-neutral-200">
        Modern living room with a high ceiling, exposed wooden beams, and large windows that allow ample natural light to enter.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold gowun-batang-regular md:text-4xl text-xl text-white">
      Serene Outdoor Scene
      </p>
      <p className="font-normal gowun-batang-regular text-base text-white"></p>
      <p className="font-normal gowun-batang-regular text-base my-4 max-w-lg text-neutral-200">
      Outdoor scene with two modern, single-story houses surrounded by a lush landscape.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/render.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/renderHome2.webp",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/1i.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/render4grid.jpeg",
  },
];
