import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { RoomsList } from "@/components/rooms-list"
import { getRoomsWithImages } from "@/lib/get-rooms-with-images"

export const metadata = {
  title: "All Rooms | Maison Élégante",
  description: "Browse all available rooms. Filter by availability and sort by price or move-in date.",
}

export default async function RoomsPage() {
  const rooms = await getRoomsWithImages()

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navigation />
      <main>
        <div className="pt-32 pb-8 px-4">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
              All Rooms
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your perfect space. Filter and sort to discover the ideal room for you.
            </p>
          </div>
        </div>
        <RoomsList initialRooms={rooms} />
      </main>
      <Footer />
    </div>
  )
}
