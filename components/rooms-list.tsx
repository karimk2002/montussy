"use client"

import { useState, useMemo, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { getRoomsWithImages } from "@/lib/get-rooms-with-images"
import type { Room } from "@/lib/room-data"
import { Calendar, ArrowUpDown, Euro } from "lucide-react"

// Mock availability data - in a real app, this would come from a database
const roomAvailability: Record<string, Date | null> = {
  "room-1": new Date(2026, 0, 16), // January 16, 2026
  "room-2": new Date(2026, 0, 15), // January 15, 2026
  "room-3": new Date(2026, 0, 20), // January 20, 2026
  "room-4": new Date(2026, 0, 18), // January 18, 2026
  "room-5": new Date(2026, 0, 16), // January 16, 2026
  "room-6": new Date(2026, 0, 22), // January 22, 2026
  "room-7": new Date(2026, 0, 19), // January 19, 2026
}

type SortOption = "price-asc" | "price-desc" | "available-asc" | "available-desc" | "name"

interface RoomsListProps {
  initialRooms?: Room[]
}

export function RoomsList({ initialRooms }: RoomsListProps) {
  const [rooms, setRooms] = useState<Room[]>(initialRooms || [])
  const [sortBy, setSortBy] = useState<SortOption>("price-asc")
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  // Load rooms if not provided
  useEffect(() => {
    if (!initialRooms || initialRooms.length === 0) {
      getRoomsWithImages().then(setRooms)
    }
  }, [initialRooms])

  const sortedAndFilteredRooms = useMemo(() => {
    let filtered = [...rooms]

    // Filter by availability
    if (showAvailableOnly) {
      filtered = filtered.filter((room) => {
        const availableDate = roomAvailability[room.id]
        // A room is available if it has a date (not null)
        // If date is in the past or today, it's available now
        // If date is in the future, it will be available then
        return availableDate !== null
      })
    }

    // Sort rooms
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "available-asc": {
          const dateA = roomAvailability[a.id]
          const dateB = roomAvailability[b.id]
          if (!dateA && !dateB) return 0
          if (!dateA) return 1
          if (!dateB) return -1
          return dateA.getTime() - dateB.getTime()
        }
        case "available-desc": {
          const dateA = roomAvailability[a.id]
          const dateB = roomAvailability[b.id]
          if (!dateA && !dateB) return 0
          if (!dateA) return 1
          if (!dateB) return -1
          return dateB.getTime() - dateA.getTime()
        }
        case "name":
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [rooms, sortBy, showAvailableOnly])

  const getAvailabilityStatus = (roomId: string) => {
    const availableDate = roomAvailability[roomId]
    if (!availableDate) {
      return { text: "Not Available", className: "text-muted-foreground" }
    }
    if (availableDate <= new Date()) {
      return { text: "Available Now", className: "text-green-600 dark:text-green-400" }
    }
    return {
      text: `Available ${availableDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`,
      className: "text-primary",
    }
  }

  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Filters and Sort Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 bg-secondary/30 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="available-only"
                checked={showAvailableOnly}
                onCheckedChange={setShowAvailableOnly}
              />
              <Label htmlFor="available-only" className="cursor-pointer">
                Show available only
              </Label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Label htmlFor="sort" className="text-sm text-muted-foreground">
              Sort by:
            </Label>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger id="sort" className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4" />
                    <span>Price: Low to High</span>
                  </div>
                </SelectItem>
                <SelectItem value="price-desc">
                  <div className="flex items-center gap-2">
                    <Euro className="h-4 w-4" />
                    <span>Price: High to Low</span>
                  </div>
                </SelectItem>
                <SelectItem value="available-asc">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Available: Soonest</span>
                  </div>
                </SelectItem>
                <SelectItem value="available-desc">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Available: Latest</span>
                  </div>
                </SelectItem>
                <SelectItem value="name">
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4" />
                    <span>Name: A-Z</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {sortedAndFilteredRooms.length} of {rooms.length} rooms
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAndFilteredRooms.map((room) => {
            const availability = getAvailabilityStatus(room.id)
            return (
              <Link key={room.id} href={`/rooms/${room.id}`} className="block">
                <Card className="group overflow-hidden border-border/50 bg-card hover:shadow-xl transition-all duration-500 h-full cursor-pointer flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={room.mainImage || "/placeholder.svg"}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Availability Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm ${availability.className}`}
                      >
                        {availability.text}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-2xl font-medium text-foreground">
                        {room.name}
                      </h3>
                      <span className="text-lg font-semibold text-foreground">€{room.price}/mo</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground mb-4 flex-1">
                      {room.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{room.size}</span>
                      <span className="text-primary group-hover:text-primary/80 transition-colors text-sm font-medium">
                        View details →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Empty State */}
        {sortedAndFilteredRooms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No rooms match your filters.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setShowAvailableOnly(false)
                setSortBy("price-asc")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
