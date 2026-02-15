import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-wide text-foreground">
          Le Billig
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#a-propos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            À propos
          </a>
          <a href="#menu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Menu
          </a>
          <a href="#horaires" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Horaires
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="https://maps.app.goo.gl/eV7aR2vw67G51Adj9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <MapPin className="w-4 h-4" />
          <span className="hidden sm:inline">Nous trouver</span>
        </a>
      </div>
    </header>
  )
}
