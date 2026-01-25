import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col md:block md:h-screen">
      {/* Desktop: Full-screen video with overlay */}
      <div className="hidden md:block md:absolute md:inset-0">
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
          style={{ transform: "rotate(2deg) scale(1.1)" }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drone%20reversed-0Q3ohCUfBSSkoubt2YFWREMo4jHPTA.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/80" />
        </div>
      </div>

      {/* Desktop: Centered overlay content */}
      <div className="hidden md:flex md:absolute md:inset-0 flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-7xl lg:text-8xl font-light leading-tight tracking-wide text-white text-balance">
          Coliving in Fontainebleau
          <br />
          <span className="font-medium">Near INSEAD</span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-white/90 text-pretty">
          Shared house with private rooms, common spaces, and all utilities included
        </p>
        <Button
          size="lg"
          className="mt-10 bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium transition-all duration-300"
          asChild
        >
          <a href="#about">Discover the House</a>
        </Button>
      </div>

      {/* Mobile: Title first */}
      <div className="md:hidden px-4 pt-20 pb-4 text-center bg-background">
        <h1 className="font-serif text-4xl font-light leading-tight tracking-wide text-foreground text-balance">
          Coliving in Fontainebleau
          <br />
          <span className="font-medium">Near INSEAD</span>
        </h1>
      </div>

      {/* Mobile: Video in the middle */}
      <div className="md:hidden relative aspect-video overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/drone%20reversed-0Q3ohCUfBSSkoubt2YFWREMo4jHPTA.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </div>

      {/* Mobile: Subtitle and button after video */}
      <div className="md:hidden px-4 py-8 text-center bg-background">
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
          Shared house with private rooms, common spaces, and all utilities included
        </p>
        <Button
          size="lg"
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium transition-all duration-300"
          asChild
        >
          <a href="#about">Discover the House</a>
        </Button>
      </div>
    </section>
  )
}
