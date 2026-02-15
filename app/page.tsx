import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Menu } from "@/components/menu";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </main>
  );
}
