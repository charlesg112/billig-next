export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Le Billig — Crêperie Bretonne</p>
        <p>481 rue Saint-Jean, Québec</p>
      </div>
    </footer>
  )
}
