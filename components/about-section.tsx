import { Home, Users, Bath, Trees, Layers, ChefHat } from "lucide-react"

const features = [
  { icon: Home, label: "200 m²", description: "Total living space" },
  { icon: Users, label: "7 Rooms", description: "Private bedrooms" },
  { icon: Bath, label: "3 Bathrooms", description: "Shared facilities" },
  { icon: Trees, label: "Garden", description: "Outdoor access" },
  { icon: Layers, label: "Basement", description: "Additional space" },
  { icon: ChefHat, label: "Full Kitchen", description: "Fully equipped" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
            About the House
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed text-pretty">
            A 200m² house in Fontainebleau with 7 private rooms, shared kitchen and living spaces, plus a garden and
            basement. Everything you need for comfortable student living close to campus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 rounded-full bg-secondary p-6 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">{feature.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
