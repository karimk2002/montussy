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
  {
    title: "Basement",
    description:
      "Additional space with washing machines, dryer, and storage. Practical amenities that make daily life easier.",
    image: "/clean-modern-basement-utility-area-with-washing-ma.jpg",
    align: "right" as const,
  },
]

export function SharedSpacesSection() {
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

        <div className="space-y-24 md:space-y-32">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                space.align === "right" ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={space.align === "right" ? "md:col-start-2" : ""}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <img
                    src={space.image || "/placeholder.svg"}
                    alt={space.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
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
