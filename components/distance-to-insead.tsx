import { MapPin, Bus, Car } from "lucide-react"

export function DistanceToInsead() {
  const distances = [
    {
      icon: MapPin,
      time: "20 minutes",
      method: "Walking",
      description: "Enjoy a pleasant stroll through Fontainebleau",
    },
    {
      icon: Bus,
      time: "11 minutes",
      method: "Public Transport",
      description: "Quick and convenient bus connections",
    },
    {
      icon: Car,
      time: "5 minutes",
      method: "By Car",
      description: "Easy drive with parking available",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl mb-4">Distance to INSEAD</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Perfectly positioned for your studies and daily routine
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {distances.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 rounded-full bg-primary/10 p-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">{item.time}</h3>
                  <p className="text-lg font-medium text-muted-foreground mb-3">{item.method}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
