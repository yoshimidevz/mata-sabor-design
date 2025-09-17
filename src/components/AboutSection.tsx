import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import colheitaImage from "@/assets/colheita-sustentavel.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-accent/10 to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img
                src={colheitaImage}
                alt="Colheita sustentável na Mata Atlântica"
                className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/40 via-transparent to-accent/20" />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Nossa Missão
            </h2>
            <div className="space-y-6 text-lg font-sans leading-relaxed text-foreground/90">
              <p>
                No <strong className="text-primary">Sabor da Mata</strong>, acreditamos que a natureza oferece os melhores ingredientes. 
                Por isso, trabalhamos diretamente com produtores locais para valorizar as frutas nativas 
                da Mata Atlântica brasileira.
              </p>
              <p>
                Cada produto é feito de forma artesanal, respeitando os ciclos naturais e promovendo 
                a sustentabilidade. Nosso compromisso é levar até sua mesa sabores únicos e autênticos, 
                enquanto contribuímos para a preservação da nossa biodiversidade.
              </p>
              <p className="font-bold text-accent text-xl italic">
                "Da floresta para sua mesa, com amor e responsabilidade."
              </p>
            </div>
            
            <div className="mt-10">
              <Link to="/sobre">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
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