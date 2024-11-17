import React from "react";
import Freeprps from "@/components/sections/Freeprps";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SpecializedTracks from "@/components/sections/SpecializedTracks";
import Logos from "@/components/sections/logos";

// Import images
import Heading1 from "@/assets/Heading.png"; // Make sure to import the image properly
import Useit from "@/components/shared/Useit";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero section */}
        <Hero />
        {/* Core Tracks Section */}
        <Logos />
        {/* Specialized Tracks */}
        <div className="space-y-120"></div>
        <Freeprps />
        <SpecializedTracks />
        <Services/>
        
      </main>
    </>
  );
}
