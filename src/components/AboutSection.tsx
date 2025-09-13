import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import colheitaImage from "@/assets/colheita-sustentavel.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={colheitaImage}
                alt="Colheita sustentável na Mata Atlântica"
                className="w-full rounded-lg shadow-natural"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nossa Missão
            </h2>
            <div className="space-y-4 text-lg font-sans leading-relaxed">
              <p>
                No <strong>Sabor da Mata</strong>, acreditamos que a natureza oferece os melhores ingredientes. 
                Por isso, trabalhamos diretamente com produtores locais para valorizar as frutas nativas 
                da Mata Atlântica brasileira.
              </p>
              <p>
                Cada produto é feito de forma artesanal, respeitando os ciclos naturais e promovendo 
                a sustentabilidade. Nosso compromisso é levar até sua mesa sabores únicos e autênticos, 
                enquanto contribuímos para a preservação da nossa biodiversidade.
              </p>
              <p className="font-medium">
                <em>Da floresta para sua mesa, com amor e responsabilidade.</em>
              </p>
            </div>
            
            <div className="mt-8">
              <Link to="/sobre">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-sans font-semibold"
                >
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;