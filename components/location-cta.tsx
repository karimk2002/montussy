import { Button } from "@/components/ui/button"

export function LocationCta() {
  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl mb-6">
          Ready to Make This Your Home?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our beautifully designed spaces and see why this is the perfect place for your time in Fontainebleau
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium transition-all duration-300"
            asChild
          >
            <a href="/">Discover the House</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 px-8 py-6 text-base font-medium transition-all duration-300 hover:bg-primary/5 bg-transparent"
            asChild
          >
            <a href="/#rooms">View Available Rooms</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
