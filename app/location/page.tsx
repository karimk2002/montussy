import { LocationHero } from "@/components/location-hero"
import { LocationMap } from "@/components/location-map"
import { DistanceToInsead } from "@/components/distance-to-insead"
import { LifestyleAccessibility } from "@/components/lifestyle-accessibility"
import { LocationCta } from "@/components/location-cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "Location | Maison Élégante - In the Heart of Fontainebleau",
  description:
    "Perfectly located in Fontainebleau, just minutes from INSEAD. Discover a calm neighborhood with easy access to everything you need.",
}

export default function LocationPage() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <LocationHero />
      <LocationMap />
      <DistanceToInsead />
      <LifestyleAccessibility />
      <LocationCta />
      <Footer />
    </main>
  )
}
