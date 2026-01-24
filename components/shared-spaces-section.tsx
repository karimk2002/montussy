"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

const spaces = [
  {
    title: "Kitchen",
    description:
      "Fully equipped kitchen with everything you need for cooking. Plenty of counter space and modern appliances for solo meals or cooking with housemates.",
    image: "/modern-luxury-kitchen-with-marble-countertops-and-.jpg",
    align: "left" as const,
  },
  {
    title: "Living Room",
    description:
      "Comfortable common area for relaxing, studying, or hanging out with your housemates. Good place to take a break from work or meet people.",
    image: "/elegant-modern-living-room-with-comfortable-seatin.jpg",
    align: "right" as const,
  },
  {
    title: "Garden",
    description:
      "Outdoor space with seating for when you need fresh air. Nice for morning coffee or evening wind-down after a long day of classes.",
    image: "/tranquil-garden-with-seating-area-and-lush-greener.jpg",
    align: "left" as const,
  },
]

export function SharedSpacesSection() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)
  
  // Separate main spaces (Kitchen, Living Room) from secondary spaces
  const mainSpaces = spaces.filter((space) => space.title === "Kitchen" || space.title === "Living Room")
  const otherSpaces = spaces.filter((space) => space.title !== "Kitchen" && space.title !== "Living Room")

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
            Shared Spaces
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Common areas for cooking, relaxing, and meeting your housemates
          </p>
        </div>

        {/* Main Spaces - Kitchen and Living Room with larger images */}
        <div className="space-y-32 md:space-y-40 mb-32">
          {mainSpaces.map((space, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${
                space.align === "right" ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Larger image - takes 7 columns on desktop */}
              <div className={`md:col-span-7 ${space.align === "right" ? "md:col-start-6" : ""}`}>
                <Dialog open={openDialog === space.image} onOpenChange={(open) => setOpenDialog(open ? space.image : null)}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:-translate-y-2 cursor-pointer">
                      <img
                        src={space.image || "/placeholder.svg"}
                        alt={space.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </DialogTrigger>
                  <DialogContent 
                    showCloseButton={false}
                    className="!max-w-[80vw] !w-auto !max-h-[80vh] !h-auto !p-0 !m-0 !bg-transparent !border-0 !shadow-none !rounded-xl !translate-x-[-50%] !translate-y-[-50%] !grid-rows-none !gap-0 overflow-hidden inline-flex items-center justify-center"
                    style={{ backgroundColor: 'transparent', padding: 0, margin: 0, border: 'none' }}
                  >
                    <img
                      src={space.image || "/placeholder.svg"}
                      alt={space.title}
                      className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain rounded-xl cursor-pointer block"
                      onClick={() => setOpenDialog(null)}
                      style={{ margin: 0, borderRadius: '0.75rem' }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
              {/* Content - takes 5 columns on desktop */}
              <div
                className={`md:col-span-5 space-y-6 ${
                  space.align === "right" ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <h3 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
                  {space.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Spaces - Garden with standard size */}
        <div className="space-y-24 md:space-y-32">
          {otherSpaces.map((space, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                space.align === "right" ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={space.align === "right" ? "md:col-start-2" : ""}>
                <Dialog open={openDialog === space.image} onOpenChange={(open) => setOpenDialog(open ? space.image : null)}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl hover:-translate-y-2 cursor-pointer">
                      <img
                        src={space.image || "/placeholder.svg"}
                        alt={space.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </DialogTrigger>
                  <DialogContent 
                    showCloseButton={false}
                    className="!max-w-[80vw] !w-auto !max-h-[80vh] !h-auto !p-0 !m-0 !bg-transparent !border-0 !shadow-none !rounded-xl !translate-x-[-50%] !translate-y-[-50%] !grid-rows-none !gap-0 overflow-hidden inline-flex items-center justify-center"
                    style={{ backgroundColor: 'transparent', padding: 0, margin: 0, border: 'none' }}
                  >
                    <img
                      src={space.image || "/placeholder.svg"}
                      alt={space.title}
                      className="max-w-[80vw] max-h-[80vh] w-auto h-auto object-contain rounded-xl cursor-pointer block"
                      onClick={() => setOpenDialog(null)}
                      style={{ margin: 0, borderRadius: '0.75rem' }}
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <div className={`space-y-6 ${space.align === "right" ? "md:col-start-1 md:row-start-1" : ""}`}>
                <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance">
                  {space.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{space.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
