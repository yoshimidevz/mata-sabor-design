import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import geleiasImg from "@/assets/category-geleias.jpg";
import produtoGeleiaJucara from "@/assets/produto-geleia-jucara.jpg";

const geleiasProducts = [
  {
    id: "1",
    name: "Geleia de Juçara",
    image: produtoGeleiaJucara,
    price: 24.90,
    description: "Geleia artesanal feita com 100% de polpa de juçara nativa da Mata Atlântica"
  },
  {
    id: "gel-2",
    name: "Geleia de Pitanga",
    image: produtoGeleiaJucara, // Placeholder - pode ser substituído por imagem específica
    price: 22.90,
    description: "Doce sabor da pitanga em uma geleia cremosa e natural"
  },
  {
    id: "gel-3",
    name: "Geleia de Cambuci",
    image: produtoGeleiaJucara, // Placeholder
    price: 26.90,
    description: "Geleia exclusiva feita com cambuci, fruta rara da Mata Atlântica"
  },
  {
    id: "gel-4",
    name: "Geleia de Uvaia",
    image: produtoGeleiaJucara, // Placeholder
    price: 23.90,
    description: "Geleia doce e aromática de uvaia, perfeita para acompanhar pães e bolos"
  }
];

const frutas = [
  { id: "jucara", name: "Juçara" },
  { id: "pitanga", name: "Pitanga" },
  { id: "cambuci", name: "Cambuci" },
  { id: "uvaia", name: "Uvaia" }
];

const CategoriaGeleias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Banner da Categoria */}
        <section 
          className="relative py-24 px-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${geleiasImg})` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Nossas Geleias Artesanais
            </h1>
            <p className="text-xl text-white/90 font-sans max-w-2xl mx-auto">
              Sabores únicos das frutas nativas da Mata Atlântica transformados em geleias cremosas e naturais
            </p>
          </div>
        </section>

        {/* Produtos com Filtros */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filtros Lateral */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="font-serif font-bold text-lg mb-6 text-primary">
                    Filtros
                  </h3>
                  
                  {/* Filtro por Fruta */}
                  <div className="mb-8">
                    <h4 className="font-sans font-semibold mb-4 text-foreground">
                      Por Fruta
                    </h4>
                    <div className="space-y-3">
                      {frutas.map((fruta) => (
                        <div key={fruta.id} className="flex items-center space-x-2">
                          <Checkbox id={fruta.id} />
                          <label 
                            htmlFor={fruta.id} 
                            className="text-sm font-sans text-foreground cursor-pointer"
                          >
                            {fruta.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Filtro por Preço */}
                  <div className="mb-8">
                    <h4 className="font-sans font-semibold mb-4 text-foreground">
                      Faixa de Preço
                    </h4>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[20]}
                        max={30}
                        min={15}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm font-sans text-muted-foreground">
                        <span>R$ 15,00</span>
                        <span>R$ 30,00</span>
                      </div>
                    </div>
                  </div>

                  {/* Ordenação */}
                  <div>
                    <h4 className="font-sans font-semibold mb-4 text-foreground">
                      Ordenar por
                    </h4>
                    <div className="space-y-3">
                      {["Mais populares", "Menor preço", "Maior preço", "Mais recentes"].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox />
                          <label className="text-sm font-sans text-foreground cursor-pointer">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Grid de Produtos */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-8">
                  <p className="text-muted-foreground font-sans">
                    Mostrando {geleiasProducts.length} produtos
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {geleiasProducts.map((product) => (
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

                {/* Paginação */}
                <div className="mt-12 flex justify-center">
                  <div className="flex space-x-2">
                    <Button variant="outline" disabled className="font-sans">
                      Anterior
                    </Button>
                    <Button className="bg-accent text-accent-foreground font-sans">
                      1
                    </Button>
                    <Button variant="outline" className="font-sans">
                      2
                    </Button>
                    <Button variant="outline" className="font-sans">
                      3
                    </Button>
                    <Button variant="outline" className="font-sans">
                      Próximo
                    </Button>
                  </div>
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

export default CategoriaGeleias;