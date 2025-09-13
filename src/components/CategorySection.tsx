import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import geleiasImg from "@/assets/category-geleias.jpg";
import polpasImg from "@/assets/category-polpas.jpg";
import desidratadosImg from "@/assets/category-desidratados.jpg";
import picolesImg from "@/assets/category-picoles.jpg";

const categories = [
  {
    name: "Geleias",
    image: geleiasImg,
    description: "Geleias artesanais com frutas nativas",
    link: "/categoria/geleias"
  },
  {
    name: "Polpas",
    image: polpasImg,
    description: "Polpas congeladas 100% naturais",
    link: "/categoria/polpas"
  },
  {
    name: "Desidratados",
    image: desidratadosImg,
    description: "Frutas desidratadas sem conservantes",
    link: "/categoria/desidratados"
  },
  {
    name: "Picolés",
    image: picolesImg,
    description: "Picolés artesanais refrescantes",
    link: "/categoria/picoles"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-forest">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Descubra nossa seleção de produtos artesanais feitos com o melhor da Mata Atlântica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <Card className="group overflow-hidden cursor-pointer hover:shadow-natural transition-all duration-300 hover:scale-105 bg-card border-border/50">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;