"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "60%",
  height: "400px",
};

const center = {
  lat: 25.880722, // Coordenadas de 9241 Collins Ave, Surfside, FL 33154
  lng: -80.121162,
};

const GoogleMapComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <div className=" text-2xl p-[0.5rem] pt-[2rem] font-semibold ">
        <h3>Based in 9241 Collins Ave, Surfside, FL 33154</h3>
      </div>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
    
  );
};

export default GoogleMapComponent;