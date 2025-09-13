import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mata-atlantica.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Sabor da Mata
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-sans font-light leading-relaxed">
          A essência da floresta direto para sua mesa
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-10 font-sans max-w-2xl mx-auto">
          Produtos artesanais feitos com frutas nativas da Mata Atlântica brasileira
        </p>
        
        <Link to="/loja">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold text-lg px-8 py-6 shadow-warm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Ver Produtos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;