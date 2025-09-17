import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-secondary to-accent backdrop-blur-md shadow-warm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
              <span className="text-lg font-bold text-white">SM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link to="/sobre" className="text-white hover:text-white/80 font-sans font-medium transition-colors">
              Sobre nós
            </Link>
            <Link to="/contato" className="text-white hover:text-white/80 font-sans font-medium transition-colors">
              Contato
            </Link>
            <Link to="/loja" className="text-white hover:text-white/80 font-sans font-medium transition-colors">
              Visite a loja
            </Link>
          </nav>

          {/* Right Side - Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-white hover:bg-white/10 font-sans">
              Log In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans px-6">
              Sign Up
            </Button>
          </div>
            
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/sobre" 
                className="text-white hover:text-white/80 transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nós
              </Link>
              <Link 
                to="/contato" 
                className="text-white hover:text-white/80 transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                to="/loja" 
                className="text-white hover:text-white/80 transition-colors font-sans font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Visite a loja
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;