export function About() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl mb-6 text-stone-800">
            L'Authenticité Bretonne au Cœur de Québec
          </h2>
          <p className="text-lg text-stone-600 mb-4 leading-relaxed">
            Bienvenue au{" "}
            <span className="font-semibold text-stone-800">Billig</span>, où
            nous célébrons la tradition des crêpes bretonnes dans une ambiance
            chaleureuse et conviviale.
          </p>
          <p className="text-lg text-stone-600 mb-4 leading-relaxed">
            Notre billig (plaque de cuisson traditionnelle bretonne) nous permet
            de créer des galettes de sarrasin et des crêpes sucrées
            authentiques, préparées avec passion et savoir-faire.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed">
            Venez découvrir les saveurs de la Bretagne sur la pittoresque rue
            Saint-Jean.
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
          <img
            src="plate.jpeg"
            alt="Intérieur du restaurant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
