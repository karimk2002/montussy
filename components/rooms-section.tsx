import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getRoomsWithImages } from "@/lib/get-rooms-with-images"

export async function RoomsSection() {
  const roomsData = await getRoomsWithImages()
  
  return (
    <section id="rooms" className="py-24 px-4 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
            Your Private Retreat
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
            Seven carefully designed bedrooms, each offering a unique character and sense of tranquility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <Link 
              key={room.id} 
              href={`/rooms/${room.id}`} 
              className={`block ${index >= 3 ? 'hidden md:block' : ''}`}
            >
              <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-500 h-full cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.mainImage || "/placeholder.svg"}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl font-medium text-foreground">{room.name}</h3>
                    <span className="text-sm text-muted-foreground">€{room.price}/mo</span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{room.description}</p>
                  <div className="mt-4 text-primary group-hover:text-primary/80 transition-colors">View details →</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/rooms">View All Available Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
