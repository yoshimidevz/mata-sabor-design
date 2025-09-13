import ProductCard from "./ProductCard";
import produtoGeleiaJucara from "@/assets/produto-geleia-jucara.jpg";
import produtoPolpaCambuci from "@/assets/produto-polpa-cambuci.jpg";
import produtoPitangaDesidratada from "@/assets/produto-pitanga-desidratada.jpg";
import produtoPicoleUvaia from "@/assets/produto-picole-uvaia.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Geleia de Juçara",
    image: produtoGeleiaJucara,
    price: 24.90,
    description: "Geleia artesanal feita com 100% de polpa de juçara nativa da Mata Atlântica"
  },
  {
    id: "2", 
    name: "Polpa de Cambuci",
    image: produtoPolpaCambuci,
    price: 18.50,
    description: "Polpa congelada pura de cambuci, fruta típica da região sudeste"
  },
  {
    id: "3",
    name: "Pitanga Desidratada",
    image: produtoPitangaDesidratada,
    price: 15.90,
    description: "Pitangas desidratadas naturalmente, sem conservantes ou açúcar adicionado"
  },
  {
    id: "4",
    name: "Picolé de Uvaia",
    image: produtoPicoleUvaia,
    price: 8.50,
    description: "Picolé artesanal de uvaia, fruta doce e aromática da Mata Atlântica"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Mais Vendidos
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Os queridinhos dos nossos clientes. Produtos que trazem todo o sabor da floresta
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
    </section>
  );
};

export default FeaturedProducts;