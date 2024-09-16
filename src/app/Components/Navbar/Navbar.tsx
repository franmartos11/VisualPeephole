"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./NavbarMenu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
    return (
        <Navbar />
        
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <nav
            className={cn("fixed gowun-batang-bold inset-x-0 mx-auto z-50 flex justify-between items-center bg-white p-[0.6rem] border-b-2 border-gray-300", className)}
        >   <div><a href="/"><img src="/logo.png" alt="Company Logo" className=" logo h-[4rem] w-auto" /></a></div>
            
            <div className=" option pr-[0rem] sm:pr-[5rem] lg:pr-[10rem]">
              <Menu setActive={setActive} >
                <HoveredLink href="/">Home</HoveredLink>
                <HoveredLink href="/">About</HoveredLink>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-lg">
                        <HoveredLink href="/ExteriorRenders">Exterior Renderings</HoveredLink>
                        <HoveredLink href="/InteriorRenders">Interior Renderings</HoveredLink>
                        <HoveredLink href="/">Animations</HoveredLink>
                        <HoveredLink href="/">BIM Solutions</HoveredLink>
                        <HoveredLink href="/Modeling">Modeling</HoveredLink>
                        <HoveredLink href="/SolidWorks">Solid Works</HoveredLink>
                    </div>
                </MenuItem>
                <HoveredLink href="/contact">Contact</HoveredLink>
            </Menu>  
            </div>
            
        </nav>
    );
}