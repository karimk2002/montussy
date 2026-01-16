import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { RoomsSection } from "@/components/rooms-section"
import { SharedSpacesSection } from "@/components/shared-spaces-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { AllInclusiveSection } from "@/components/all-inclusive-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <SharedSpacesSection />
      <AmenitiesSection />
      <AllInclusiveSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
