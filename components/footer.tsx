import { Home, Mail, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6" />
              <h3 className="font-serif text-2xl font-medium">Mont Ussy </h3>
            </div>
            <p className="opacity-90 leading-relaxed">
              Premium coliving for those who appreciate quality, comfort, and community.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block opacity-90 hover:opacity-100 transition-opacity">
                About the House
              </a>
              <a href="#rooms" className="block opacity-90 hover:opacity-100 transition-opacity">
                Available Rooms
              </a>
              <a href="#contact" className="block opacity-90 hover:opacity-100 transition-opacity">
                Contact Us
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:kkouchrad@gmail.com" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4" />
                <span className="text-sm">kkouchrad@gmail.com</span>
              </a>
              <a href="tel:+33754520244" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+33754520244</span>
              </a>
              <a 
                href="https://wa.me/393516162970" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">Chat with me on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-75">© {new Date().getFullYear()} Maison Élégante. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
