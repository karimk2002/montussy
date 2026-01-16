"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface RoomAvailabilityProps {
  roomId: string
  roomName: string
}

export function RoomAvailability({ roomId, roomName }: RoomAvailabilityProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock unavailable dates (replace with real data)
  const unavailableDates = [new Date(2025, 0, 15), new Date(2025, 0, 16), new Date(2025, 0, 17)]

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some((unavailableDate) => unavailableDate.toDateString() === date.toDateString())
  }

  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Check Availability</h2>
          <p className="mt-4 text-muted-foreground">See when {roomName} is available for move-in</p>
        </div>

        <Card className="max-w-3xl mx-auto p-8">
          <div className="flex flex-col items-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => isDateUnavailable(date) || date < new Date()}
              className="rounded-md"
            />

            <div className="mt-8 w-full max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-primary" />
                  <span className="text-sm text-muted-foreground">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-muted" />
                  <span className="text-sm text-muted-foreground">Unavailable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm border border-border" />
                  <span className="text-sm text-muted-foreground">Available</span>
                </div>
              </div>

              {date && (
                <div className="bg-secondary/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Selected Move-in Date</p>
                  <p className="font-medium text-foreground">
                    {date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}

              <Button className="w-full" size="lg">
                Request Booking
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
