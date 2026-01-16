export interface Room {
  id: string
  name: string
  description: string
  price: number
  size: string
  mainImage: string
  gallery: string[]
  features: string[]
  amenities: string[]
}

export const roomsData: Room[] = [
  {
    id: "room-1",
    name: "Room 1",
    description: "First-floor corner room with exceptional natural light and calm setting",
    price: 850,
    size: "15m²",
    mainImage: "/images/room-1/img-6740.jpeg",
    gallery: [],
    features: [
      "Brightest room in the house with exceptional natural light",
      "Two windows with morning light",
      "Corner location for added privacy and quiet",
      "Dedicated desk/work area",
      "Large wardrobe for ample storage",
      "Shared toilets and bathrooms",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk & chair", "Wardrobe", "Curtains", "Lamp"],
  },
  {
    id: "room-2",
    name: "Room 2",
    description: "Bright, calm space with private shower and natural light",
    price: 900,
    size: "17m²",
    mainImage: "/images/room-2/img-6728.jpeg",
    gallery: [
      "/images/room-2/img-6734.jpeg",
      "/images/room-2/img-6732.jpeg",
    ],
    features: [
      "Bright, airy space with multiple windows and blackout curtains",
      "Private shower and lavabo in-room (no toilet)",
      "Dedicated work/dining desk with chair",
      "Separate closet/dressing area with hanging rail and mirror",
      "Open shelving for extra storage and linens",
      "First-floor location with easy access",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk & chair", "Built-in shelves", "Curtains", "Mirror"],
  },
  {
    id: "room-3",
    name: "Room 3",
    description: "Spacious ground-floor room with private shower and bright, airy feel",
    price: 825,
    size: "14m²",
    mainImage: "/images/room-3/img-6726.jpg",
    gallery: [],
    features: [
      "Spacious layout compared with other rooms",
      "Bright, airy space with multiple windows and blackout curtains",
      "Private shower and lavabo in-room (no toilet)",
      "Dedicated work/dining desk with chair",
      "Separate closet/dressing area with hanging rail and mirror",
      "Open shelving for extra storage and linens",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk", "Wardrobe", "Curtains", "Lamp", "Private shower"],
  },
  {
    id: "room-4",
    name: "Room 4",
    description: "Largest ground-floor room with extra space and premium comfort",
    price: 950,
    size: "18m²",
    mainImage: "/images/room-4/ad57d367-8588-488c-b7cd.jpeg",
    gallery: [
      "/images/room-4/2838345a-da9b-4bbb-b3d1.jpeg",
      "/images/room-4/dc6875f3-e6b0-45a5-b5fc.jpeg",
    ],
    features: [
      "Largest room in the house with extra space for sleeping, working, and relaxing",
      "Ground-floor location for easy access to house and common areas",
      "Quality furnishings including bed, desk, chair, closet, lamp, and bedding",
      "Shared toilets and bathrooms",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk & chair", "Closet", "Lamp"],
  },
  {
    id: "room-5",
    name: "Room 5",
    description: "Spacious ground-floor room with high ceilings and original character",
    price: 875,
    size: "16m²",
    mainImage: "/images/room-5/elegant-bedroom-with-classic-details-and-soft-text.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Spacious 16m² room with high ceilings",
      "Original architectural details and classic style",
      "Ground-floor location with easy access",
      "Private shower in-room (no sink)",
      "Quality furnishings including desk, wardrobe, lamp, and bedding",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk", "Wardrobe", "Lamp", "Private shower"],
  },
  {
    id: "room-6",
    name: "Room 6",
    description: "Spacious ground-floor room with modern design and easy access",
    price: 890,
    size: "16m²",
    mainImage: "/images/room-6/modern-minimalist-bedroom-with-clean-lines.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      "Spacious 16m² room suitable for sleeping, working, and relaxing",
      "Modern style with updated finishes and clean design",
      "Good storage with wardrobe and functional desk area",
      "Ground-floor location for easy access",
      "Shared toilets and bathrooms",
    ],
    amenities: ["WiFi included", "Bedding provided", "Desk", "Wardrobe", "Lamp", "USB ports"],
  },
  {
    id: "room-7",
    name: "Room 7",
    description: "Bright room with large windows",
    price: 860,
    size: "15m²",
    mainImage: "/images/room-7/bright-airy-bedroom-with-large-windows-and-plants.jpg",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    features: ["Lots of natural light", "Big windows", "Private bathroom and toilet"],
    amenities: [
      "WiFi included",
      "Bedding provided",
      "Desk & chair",
      "Storage",
      "Curtains",
      "Shelves",
      "Private bathroom with toilet",
    ],
  },
]
