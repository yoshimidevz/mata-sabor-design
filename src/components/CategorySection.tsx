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
    <section className="py-20 px-4 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossas Categorias
          </h2>
          <p className="text-xl text-muted-foreground font-sans max-w-3xl mx-auto leading-relaxed">
            Descubra nossa seleção de produtos artesanais feitos com o melhor da Mata Atlântica
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.link} className="group">
              <Card className="overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-accent/20">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground font-sans">
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