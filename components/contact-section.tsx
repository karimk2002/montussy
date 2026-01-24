"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, User, MessageSquare, MessageCircle } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Request sent successfully! We'll get back to you soon.")
        // Reset form
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error(data.error || "Failed to send request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl lg:text-6xl text-balance">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Have questions or want to visit? Chat with us on WhatsApp or send us a message.
          </p>
        </div>

        {/* WhatsApp Button - First Choice */}
        <div className="mb-8">
          <a
            href="https://wa.me/393516162970"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white p-6 rounded-lg border border-[#25D366]/20 shadow-lg transition-all duration-300 hover:shadow-xl group"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="text-lg font-medium">Chat with us on WhatsApp</span>
            <MessageCircle className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Quick response guaranteed - we're here to help!
          </p>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-secondary/30 text-muted-foreground">or</span>
          </div>
        </div>

        {/* Request Availability Form */}
        <div className="mb-6">
          <h3 className="text-2xl font-serif font-medium text-foreground mb-2 text-center">
            Request Availability
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Fill out the form below and we'll get back to you via email
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 md:p-12 rounded-lg border border-border/50 shadow-sm"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
              <User className="h-4 w-4" />
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about yourself and when you're looking to move in..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </div>
    </section>
  )
}
