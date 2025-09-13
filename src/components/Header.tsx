import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-tropical border-b border-border/30 sticky top-0 z-50 shadow-tropical backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold text-primary uppercase">
              Sabor da Mata
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-sans font-medium"
            >
              Início
            </Link>
            <Link 
              to="/loja" 
              className="text-foreground hover:text-primary transition-colors font-sans font-medium"
            >
              Loja
            </Link>
            <Link 
              to="/sobre" 
              className="text-foreground hover:text-primary transition-colors font-sans font-medium"
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contato" 
              className="text-foreground hover:text-primary transition-colors font-sans font-medium"
            >
              Contato
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/loja" 
                className="text-foreground hover:text-primary transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </Link>
              <Link 
                to="/sobre" 
                className="text-foreground hover:text-primary transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-foreground hover:text-primary transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;