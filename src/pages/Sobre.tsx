import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Users, Award } from "lucide-react";
import colheitaImage from "@/assets/colheita-sustentavel.jpg";

const valores = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Promovemos práticas sustentáveis que preservam a Mata Atlântica e valorizam a biodiversidade local."
  },
  {
    icon: Heart,
    title: "Qualidade Artesanal", 
    description: "Cada produto é feito com cuidado e dedicação, respeitando receitas tradicionais e ingredientes naturais."
  },
  {
    icon: Users,
    title: "Comunidade Local",
    description: "Trabalhamos diretamente com produtores locais, fortalecendo a economia regional e familiar."
  },
  {
    icon: Award,
    title: "Sabor Autêntico",
    description: "Oferecemos o verdadeiro sabor das frutas nativas, sem conservantes ou aditivos artificiais."
  }
];

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-forest">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
              O Sabor da Mata nasceu da paixão pela Mata Atlântica e pela valorização das frutas nativas brasileiras. 
              Acreditamos que cada fruto carrega consigo a essência da floresta e histórias de gerações.
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Nossa Missão
                </h2>
                <div className="space-y-4 text-lg font-sans leading-relaxed text-foreground">
                  <p>
                    Desde nossa fundação, temos como missão resgatar e valorizar os sabores únicos 
                    das frutas nativas da Mata Atlântica, transformando-os em produtos artesanais 
                    de alta qualidade.
                  </p>
                  <p>
                    Trabalhamos em parceria com pequenos produtores e comunidades locais, 
                    promovendo práticas sustentáveis que contribuem para a preservação 
                    da nossa biodiversidade.
                  </p>
                  <p>
                    Cada produto que criamos é uma celebração da riqueza natural brasileira, 
                    levando até sua mesa sabores autênticos e memórias afetivas da nossa terra.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={colheitaImage}
                  alt="Produtores locais na Mata Atlântica"
                  className="w-full rounded-lg shadow-natural"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 px-4 bg-secondary text-secondary-foreground">
          <div className="container mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Nossos Valores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <Card key={index} className="p-6 text-center bg-secondary-foreground/5 border-secondary-foreground/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-foreground text-secondary mb-4">
                    <valor.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-3">
                    {valor.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed opacity-90">
                    {valor.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compromisso */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Nosso Compromisso
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg font-sans leading-relaxed text-foreground mb-8">
                Comprometemo-nos a manter os mais altos padrões de qualidade em nossos produtos, 
                respeitando os ciclos naturais das frutas e as tradições das comunidades locais. 
                Cada compra que você faz nos ajuda a fortalecer essa rede de sustentabilidade 
                e preservação ambiental.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="font-sans text-muted-foreground">Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="font-sans text-muted-foreground">Produtores Parceiros</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="font-sans text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;