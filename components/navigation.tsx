"use client"

import type React from "react"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const scrollToElement = (id: string) => {
        // Try multiple times with increasing delays to ensure element is rendered
        let attempts = 0
        const maxAttempts = 10
        
        const tryScroll = () => {
          const element = document.getElementById(id)
          if (element) {
            // Get the navigation height to offset the scroll
            const navHeight = 64 // Height of the fixed navigation
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
            return true
          }
          return false
        }
        
        // Try immediately
        if (tryScroll()) return
        
        // Retry with increasing delays
        const interval = setInterval(() => {
          attempts++
          if (tryScroll() || attempts >= maxAttempts) {
            clearInterval(interval)
          }
        }, 100)
        
        // Cleanup after max time
        setTimeout(() => clearInterval(interval), 2000)
      }
      
      // Check for stored scroll target from navigation
      const scrollTarget = sessionStorage.getItem("scrollTarget")
      if (scrollTarget) {
        sessionStorage.removeItem("scrollTarget")
        // Wait a bit for page to start rendering
        setTimeout(() => scrollToElement(scrollTarget), 100)
      }
      
      // Also check URL hash (for direct navigation or page refresh)
      const hash = window.location.hash.substring(1)
      if (hash) {
        setTimeout(() => scrollToElement(hash), 100)
      }
    }
  }, [pathname])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      
      // If we're on the home page, scroll directly
      if (pathname === "/") {
      const element = document.getElementById(id)
      if (element) {
          setIsOpen(false)
          // Get the navigation height to offset the scroll
          const navHeight = 64 // Height of the fixed navigation
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
          // Update URL hash without scrolling
          window.history.pushState(null, "", `/#${id}`)
        }
      } else {
        // If we're on another page, navigate to home and store scroll target
        setIsOpen(false)
        sessionStorage.setItem("scrollTarget", id)
        router.push("/")
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-medium text-foreground hover:text-accent transition-colors">
            Mont Ussy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, "/#about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/rooms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Rooms
            </Link>
            <Link
              href="/#amenities"
              onClick={(e) => handleSmoothScroll(e, "/#amenities")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Amenities
            </Link>
            <Link href="/location" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Location
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, "/#contact")}
              className="rounded-full bg-accent px-6 py-2 text-sm text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              href="/#about"
              onClick={(e) => handleSmoothScroll(e, "/#about")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/rooms"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/#amenities"
              onClick={(e) => handleSmoothScroll(e, "/#amenities")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Amenities
            </Link>
            <Link
              href="/location"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleSmoothScroll(e, "/#contact")}
              className="block text-sm text-accent hover:text-accent/90 transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
