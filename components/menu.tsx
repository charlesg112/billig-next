const menuItems = {
  galettes: [
    { name: "Jambon et fromage", description: "Ham and cheese" },
    {
      name: "Œuf, jambon, fromage",
      description: "Egg, ham, cheese",
    },
    {
      name: "Œuf, jambon, fromage, légumes de saison",
      description: "Egg, ham, cheese, seasonal vegetables",
    },
    {
      name: "Œuf, fromage, lardons",
      description: "Egg, cheese, crumbled bacon",
    },
    {
      name: "Œuf, fromage, proscuitto",
      description: "Egg, cheese, proscuitto",
    },
    {
      name: "Œuf, fromage, andouille",
      description: "Egg, cheese, andouille",
    },
    {
      name: "Œuf, fromage, chorizo, échalotes poêlées",
      description: "Egg, cheese, chorizo, fried shallots",
    },
  ],
  crepes: [
    { name: "Jambon et asperges", description: "Ham and asparagus" },
    {
      name: "Saumon fumé et épinards",
      description: "Smoked salmon and spinach",
    },
    {
      name: "Champignons de saison et épinards",
      description: "Smoked salmon and spinach",
    },
    {
      name: "Canard config",
      description: "Duck confit",
    },
  ],
};

export function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 ">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Notre carte
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Crêpes et Bénédictines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:ml-24">
          <div>
            <h3 className="text-xl font-bold mb-1">Les Crêpes classiques</h3>
            <p className="text-sm text-muted-foreground font-bold mb-8 pb-2 border-b border-border">
              Classic crêpes
            </p>
            <ul className="space-y-6">
              {menuItems.galettes.map((item) => (
                <li key={item.name}>
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xl font-bold mb-1">Les Bénédictines</p>
            <p className="text-sm text-muted-foreground font-bold mb-8 pb-2 border-b border-border">
              Crêpes Benedict
            </p>
            <ul className="space-y-6">
              {menuItems.crepes.map((item) => (
                <li key={item.name}>
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Les crêpes salées sont faites avec de la farine de sarasin bio
        </p>
      </div>
    </section>
  );
}
