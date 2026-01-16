import { Check } from "lucide-react"

const included = [
  "Water consumption",
  "Electricity",
  "Heating",
  "High-speed internet",
  "All maintenance",
  "Building insurance",
]

export function AllInclusiveSection() {
  return (
    <section className="py-24 px-4 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl font-medium md:text-5xl lg:text-6xl text-balance">All Utilities Included</h2>
        <p className="mt-6 text-lg leading-relaxed opacity-90 text-pretty">
          One simple monthly payment covers everything. No surprise bills or hidden costs.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {included.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-left p-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm"
            >
              <Check className="h-5 w-5 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
