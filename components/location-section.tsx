import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-24 px-4 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-center mb-12 text-balance">
          Discover the Neighborhood
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Located at 3 rue Mont Ussy in Fontainebleau. Walking distance to INSEAD campus and close to the town
                center with shops, cafes, and the forest.
              </p>
              <p className="text-pretty">
                Good transport connections to Paris and easy to get around town on foot or by bike.
              </p>
            </div>
            <Link
              href="/location"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span>Explore the Neighborhood</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
