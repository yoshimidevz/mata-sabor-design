import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Sabor da Mata</h3>
            <p className="font-sans text-primary-foreground/80 mb-4 leading-relaxed">
              Produtos artesanais feitos com frutas nativas da Mata Atlântica brasileira. 
              Valorizando a biodiversidade local com sustentabilidade e sabor autêntico.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-lg">Links Úteis</h4>
            <ul className="space-y-2 font-sans">
              <li>
                <Link 
                  to="/" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/loja" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Loja
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>contato@sabordamata.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-sans text-primary-foreground/60 text-sm">
            © 2024 Sabor da Mata. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;