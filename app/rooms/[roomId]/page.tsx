import { notFound } from "next/navigation"
import { roomsData } from "@/lib/room-data"
import { getRoomWithImages } from "@/lib/get-rooms-with-images"
import { RoomGallery } from "@/components/room-gallery"
import { RoomDetails } from "@/components/room-details"
import { RoomAvailability } from "@/components/room-availability"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const roomAvailability: Record<string, Date | null> = {
  "room-1": new Date(2026, 0, 10), // January 10, 2026 (available now)
  "room-2": new Date(2026, 0, 8),  // January 8, 2026 (available now)
  "room-3": new Date(2026, 0, 12), // January 12, 2026 (available now)
  "room-4": new Date(2026, 0, 5),  // January 5, 2026 (available now)
  "room-5": new Date(2026, 0, 16), // January 16, 2026 (available now)
  "room-6": new Date(2026, 0, 14), // January 14, 2026 (available now)
  "room-7": new Date(2026, 0, 9),  // January 9, 2026 (available now)
}

export async function generateStaticParams() {
  return roomsData.map((room) => ({
    roomId: room.id,
  }))
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ roomId: string }>
}) {
  const { roomId } = await params
  const room = await getRoomWithImages(roomId)

  if (!room) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navigation />
      <main>
        <div className="pt-32 pb-4 px-4">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-2">{room.name}</h1>
            <p className="text-lg text-muted-foreground">
              {room.size} • {room.price}/month • {room.features.find(f => f.includes("bathroom") || f.includes("shower")) || "Shared facilities"}
            </p>
          </div>
        </div>
        <div className="pt-0">
          <RoomGallery room={room} />
        </div>
        <RoomDetails room={room} />
        <div id="availability">
          <RoomAvailability roomId={room.id} roomName={room.name} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
