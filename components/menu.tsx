const menuItems = {
  galettes: [
    { name: "La Complète", description: "Jambon, œuf, emmental" },
    { name: "La Forestière", description: "Champignons, crème, emmental" },
    { name: "La Chèvre", description: "Fromage de chèvre, miel, noix" },
    { name: "La Bretonne", description: "Andouille de Guémené, oignons confits" },
  ],
  crepes: [
    { name: "Beurre Sucre", description: "Beurre demi-sel, sucre fin" },
    { name: "Caramel au Beurre Salé", description: "Caramel maison, fleur de sel" },
    { name: "Pommes Flambées", description: "Pommes caramélisées, calvados" },
    { name: "Chocolat Noisettes", description: "Chocolat noir, noisettes torréfiées" },
  ],
}

export function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">Notre carte</p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Galettes & Crêpes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8 pb-2 border-b border-border">Galettes de sarrasin</h3>
            <ul className="space-y-6">
              {menuItems.galettes.map((item) => (
                <li key={item.name}>
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 pb-2 border-b border-border">Crêpes sucrées</h3>
            <ul className="space-y-6">
              {menuItems.crepes.map((item) => (
                <li key={item.name}>
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Accompagnez vos crêpes d'un cidre breton artisanal
        </p>
      </div>
    </section>
  )
}
