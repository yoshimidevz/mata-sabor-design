import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
}

const ProductCard = ({ id, name, image, price, description }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group overflow-hidden cursor-pointer hover:shadow-natural transition-all duration-300 bg-card border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <Button 
              size="sm" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-warm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif font-semibold text-primary mb-2 text-lg">
          {name}
        </h3>
        {description && (
          <p className="text-muted-foreground font-sans text-sm mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-sans font-bold text-accent">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;