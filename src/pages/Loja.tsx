import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import produtoGeleiaJucara from "@/assets/produto-geleia-jucara.jpg";
import produtoPolpaCambuci from "@/assets/produto-polpa-cambuci.jpg";
import produtoPitangaDesidratada from "@/assets/produto-pitanga-desidratada.jpg";
import produtoPicoleUvaia from "@/assets/produto-picole-uvaia.jpg";

const allProducts = [
  {
    id: "1",
    name: "Geleia de Juçara",
    image: produtoGeleiaJucara,
    price: 24.90,
    category: "geleia",
    description: "Geleia artesanal feita com 100% de polpa de juçara nativa da Mata Atlântica"
  },
  {
    id: "2", 
    name: "Polpa de Cambuci",
    image: produtoPolpaCambuci,
    price: 18.50,
    category: "polpa",
    description: "Polpa congelada pura de cambuci, fruta típica da região sudeste"
  },
  {
    id: "3",
    name: "Pitanga Desidratada",
    image: produtoPitangaDesidratada,
    price: 15.90,
    category: "desidratado",
    description: "Pitangas desidratadas naturalmente, sem conservantes ou açúcar adicionado"
  },
  {
    id: "4",
    name: "Picolé de Uvaia",
    image: produtoPicoleUvaia,
    price: 8.50,
    category: "picole",
    description: "Picolé artesanal de uvaia, fruta doce e aromática da Mata Atlântica"
  },
];

const Loja = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Nossa Loja
            </h1>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Descubra todos os nossos produtos artesanais da Mata Atlântica
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar produtos..." 
                className="pl-10 font-sans"
              />
            </div>
            
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px] font-sans">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="geleia">Geleias</SelectItem>
                  <SelectItem value="polpa">Polpas</SelectItem>
                  <SelectItem value="desidratado">Desidratados</SelectItem>
                  <SelectItem value="picole">Picolés</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-[150px] font-sans">
                  <SelectValue placeholder="Preço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Menor preço</SelectItem>
                  <SelectItem value="desc">Maior preço</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Loja;