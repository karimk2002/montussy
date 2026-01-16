"use client"

import type { Room } from "@/lib/room-data"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface RoomDetailsProps {
  room: Room
}

export function RoomDetails({ room }: RoomDetailsProps) {
  const scrollToCalendar = () => {
    const availabilitySection = document.getElementById("availability")
    if (availabilitySection) {
      availabilitySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-2">
            <h1 className="font-serif text-4xl font-medium text-foreground md:text-5xl">{room.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{room.description}</p>

            {/* Features */}
            <div className="mt-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">Included Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{amenity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Section */}
            <div id="availability" className="mt-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">Availability</h2>
              {/* Calendar component or availability details would go here */}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-32">
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-medium text-foreground">€{room.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">All-inclusive pricing</p>
              </div>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Room size</span>
                  <span className="font-medium text-foreground">{room.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available</span>
                  <button
                    onClick={scrollToCalendar}
                    className="font-medium text-primary hover:underline cursor-pointer"
                  >
                    See calendar
                  </button>
                </div>
              </div>

              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Utilities included
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  WiFi & cleaning
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  Flexible terms
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
