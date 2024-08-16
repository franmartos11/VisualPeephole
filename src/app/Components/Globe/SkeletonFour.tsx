"use client";
import React from "react";
import { cn } from "@/utils/cn";
import createGlob from "cobe";
import { useEffect, useRef } from "react";
 

 
export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center  mt-10">
       <h3 className=" px-40 pb-10 text-4xl font-semibold text-white  text-center">Our Services</h3>
      <Globe className="" />
    </div>
  );
};
 
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    let phi = 0;
 
    if (!canvasRef.current) return;
 
    const globe = createGlob(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: phi) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });
 
    return () => {
      globe.destroy();
    };
  }, []);
 
  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
