"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavbarMenu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
    return (
        <Navbar className="top-2" />
        
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <nav
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <HoveredLink href="/">Home</HoveredLink>
                <HoveredLink href="/">About</HoveredLink>
                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Exterior Renders</HoveredLink>
                        <HoveredLink href="/interface-design">Interior Renders</HoveredLink>
                        <HoveredLink href="/seo">Animations</HoveredLink>
                        <HoveredLink href="/branding">BIM Solutions</HoveredLink>
                        <HoveredLink href="/branding">Modeling</HoveredLink>
                        <HoveredLink href="/branding">Solid Works</HoveredLink>
                    </div>
                </MenuItem>
                <HoveredLink href="/">Contact</HoveredLink>
            </Menu>
        </nav>
    );
}