"use client"

export function LocationMap() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Our Address</h2>
          <p className="mt-4 text-lg text-muted-foreground">3 rue Mont Ussy, Fontainebleau</p>
        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641.7276953095665!2d2.6969!3d48.4053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e3b0c5f5c5c5%3A0x5c5c5c5c5c5c5c5c!2s3%20Rue%20Mont%20Ussy%2C%2077300%20Fontainebleau%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Map showing 3 rue Mont Ussy, Fontainebleau"
          />
        </div>
      </div>
    </section>
  )
}
