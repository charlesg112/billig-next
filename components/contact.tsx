import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-stone-800">
            Venez Nous Voir
          </h2>
          <p className="text-lg text-stone-600">Au cœur du Vieux-Québec</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-stone-800">Adresse</h3>
                <p className="text-stone-600">
                  481 Rue Saint-Jean
                  <br />
                  Québec, QC G1R 1P4
                  <br />
                  Canada
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-stone-800">Horaires</h3>
                <div className="text-stone-600 space-y-1">
                  <p>Lundi - Vendredi : 11h30 - 22h00</p>
                  <p>Samedi - Dimanche : 10h00 - 22h00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-stone-800">Téléphone</h3>
                <p className="text-stone-600">(418) 524-8341</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2 text-stone-800">Courriel</h3>
                <p className="text-stone-600">bonjour@lebillig.ca</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1726807480004-6b98783c28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWViZWMlMjBjaXR5JTIwc3RyZWV0fGVufDF8fHx8MTc2ODA3ODU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rue Saint-Jean, Québec"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
