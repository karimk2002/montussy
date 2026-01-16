'use server'

import { readdir } from "fs/promises"
import { join } from "path"

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"]

/**
 * Gets all image files from a room folder
 */
export async function getRoomImages(roomId: string): Promise<string[]> {
  try {
    const roomFolder = join(process.cwd(), "public", "images", roomId)
    const files = await readdir(roomFolder)
    
    // Filter for image files only
    const imageFiles = files
      .filter((file) => {
        const ext = file.toLowerCase().substring(file.lastIndexOf("."))
        return imageExtensions.includes(ext)
      })
      .sort() // Sort alphabetically for consistent ordering
      .map((file) => `/images/${roomId}/${file}`)
    
    return imageFiles
  } catch (error) {
    // Folder doesn't exist or can't be read
    console.warn(`Could not read images for ${roomId}:`, error)
    return []
  }
}

/**
 * Gets the main image (first image) and gallery (remaining images) for a room
 */
export async function getRoomImageData(roomId: string): Promise<{
  mainImage: string
  gallery: string[]
}> {
  const images = await getRoomImages(roomId)
  
  if (images.length === 0) {
    return {
      mainImage: "/placeholder.svg",
      gallery: [],
    }
  }
  
  return {
    mainImage: images[0],
    gallery: images.slice(1), // All images except the first one
  }
}
