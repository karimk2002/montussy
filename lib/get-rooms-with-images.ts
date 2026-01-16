import { roomsData, type Room } from "@/lib/room-data"
import { getRoomImageData } from "./get-room-images"

/**
 * Enriches room data with automatically loaded images from folders
 * If folder is empty, falls back to existing room data
 */
export async function getRoomsWithImages(): Promise<Room[]> {
  const rooms = await Promise.all(
    roomsData.map(async (room) => {
      const imageData = await getRoomImageData(room.id)
      
      // If folder has images, use them. Otherwise, keep existing room data
      if (imageData.mainImage !== "/placeholder.svg") {
        return {
          ...room,
          mainImage: imageData.mainImage,
          gallery: imageData.gallery,
        }
      }
      
      // Fallback to existing room data if folder is empty
      return room
    })
  )
  return rooms
}

/**
 * Gets a single room with automatically loaded images
 * If folder is empty, falls back to existing room data
 */
export async function getRoomWithImages(roomId: string): Promise<Room | undefined> {
  const room = roomsData.find((r) => r.id === roomId)
  if (!room) return undefined

  const imageData = await getRoomImageData(roomId)
  
  // If folder has images, use them. Otherwise, keep existing room data
  if (imageData.mainImage !== "/placeholder.svg") {
    return {
      ...room,
      mainImage: imageData.mainImage,
      gallery: imageData.gallery,
    }
  }
  
  // Fallback to existing room data if folder is empty
  return room
}
