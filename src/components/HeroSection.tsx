import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mata-atlantica.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="text-primary block">Frutas Nativas da</span>
              <span className="text-foreground block">Mata Atlântica</span>
              <span className="text-foreground block">na sua porta!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg leading-relaxed">
              Nós acreditamos em passar o conhecimento e a cultura da mata atlântica através das frutas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                asChild
              >
                <Link to="/loja" className="flex items-center gap-2">
                  <span>📦</span>
                  Ir para Loja
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="text-foreground hover:bg-white/10 font-semibold px-8 py-4 rounded-full border border-foreground/20 hover:border-foreground/40 transition-all duration-300"
                asChild
              >
                <Link to="/sobre" className="flex items-center gap-2">
                  Saiba Mais
                  <span>→</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={heroImage} 
                  alt="Frutas nativas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/produto-polpa-cambuci.jpg" 
                  alt="Cambuci" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/produto-geleia-jucara.jpg" 
                  alt="Juçara" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/produto-pitanga-desidratada.jpg" 
                  alt="Pitanga desidratada" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;