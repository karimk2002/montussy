import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-24 px-4 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-center mb-12 text-balance">
          Discover the Neighborhood
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
              className="inline-flex items-center gap-2 text-accent hover:text-accent/90 transition-colors group"
            >
              <span className="text-lg text-card-foreground underline">Explore the Neighborhood</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 text-card-foreground" />
            </Link>
          </div>
          <Link href="/location" className="relative aspect-[4/3] overflow-hidden rounded-lg block cursor-pointer group">
            <img
              src="/beautiful-urban-neighborhood-with-tree-lined-stree.jpg"
              alt="Neighborhood location"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
