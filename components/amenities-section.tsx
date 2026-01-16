import { Waves, Wind, Wifi, Zap, Droplets, Thermometer } from "lucide-react"

const amenities = [
  { icon: Waves, label: "Multiple Washing Machines", description: "Never wait for laundry" },
  { icon: Wind, label: "Tumble Dryer", description: "Convenient drying facilities" },
  { icon: Wifi, label: "High-Speed Internet", description: "Seamless connectivity" },
  { icon: Zap, label: "All Utilities Included", description: "No hidden costs" },
  { icon: Droplets, label: "Water Included", description: "Unlimited usage" },
  { icon: Thermometer, label: "Heating Included", description: "Stay comfortable year-round" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 px-4 md:py-32 bg-secondary/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
            What's Included
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            All the essentials covered in your monthly rent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 rounded-full bg-secondary p-3">
                <amenity.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-lg">{amenity.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
