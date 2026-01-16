"use client"

import { useState } from "react"
import type { Room } from "@/lib/room-data"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomGalleryProps {
  room: Room
}

export function RoomGallery({ room }: RoomGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [room.mainImage, ...room.gallery]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="pb-8 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Main Image */}
        <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-secondary/30 mb-4">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt={`${room.name} - Image ${currentImage + 1}`}
            className="h-full w-full object-cover"
          />

          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background"
            onClick={previousImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-background/90 px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
                currentImage === index ? "border-primary" : "border-transparent hover:border-border"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${room.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
