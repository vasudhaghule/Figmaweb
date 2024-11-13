import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import SpecializedTracks from "@/components/sections/SpecializedTracks"
import Logos from "@/components/sections/logos"


export default function Home() {
  return (<>
  <main>

    {/* Hero section */}
    <Hero/>
    {/* Core Tracks Section */}
    <Logos/>
    {/* Specialized Tracks */}
    <SpecializedTracks/>
    {/* outcome tracks */}
    <Services/>
    
  </main>


     </>
  )
}