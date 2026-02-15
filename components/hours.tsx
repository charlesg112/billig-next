const schedule = [
  { day: "Lundi", hours: "11h - 22h" },
  { day: "Mardi", hours: "11h - 22h" },
  { day: "Mercredi", hours: "11h - 22h" },
  { day: "Jeudi", hours: "11h - 22h" },
  { day: "Vendredi", hours: "11h - 22h" },
  { day: "Samedi", hours: "10h - 22h" },
  { day: "Dimanche", hours: "10h - 22h" },
]

export function Hours() {
  return (
    <section id="horaires" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">Horaires</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Quand nous visiter</h2>

        <ul className="space-y-3">
          {schedule.map((item) => (
            <li key={item.day} className="flex justify-between py-2 border-b border-border last:border-0">
              <span className="text-muted-foreground">{item.day}</span>
              <span className="font-medium">{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
