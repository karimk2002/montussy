export function LocationHero() {
  return (
    <section className="relative h-[30vh] w-full overflow-hidden mt-[80px]">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img src="/calm-serene-french-town-street-with-historic-build.jpg" alt="Fontainebleau neighborhood" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-5xl font-light leading-tight tracking-wide text-white md:text-6xl lg:text-7xl text-balance">
          In the Heart of
          <br />
          <span className="font-medium">Fontainebleau</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl text-pretty">
          A perfect location combining tranquility, accessibility, and French charm
        </p>
      </div>
    </section>
  )
}
