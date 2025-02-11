import React from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";

const supplements = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    price: "$49.99",
    rating: 4.8,
    description: "Premium isolate protein with 27g protein per serving",
    category: "Protein",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Whey+Protein"
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    price: "$29.99",
    rating: 4.7,
    description: "Pure micronized creatine for strength and recovery",
    category: "Performance",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Creatine"
  },
  {
    id: 3,
    name: "Pre-Workout Energy",
    price: "$39.99",
    rating: 4.6,
    description: "Advanced formula with caffeine and beta-alanine",
    category: "Energy",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Pre-Workout"
  },
  {
    id: 4,
    name: "BCAA Complex",
    price: "$34.99",
    rating: 4.5,
    description: "2:1:1 ratio of essential amino acids",
    category: "Recovery",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=BCAA"
  },
  {
    id: 5,
    name: "Mass Gainer",
    price: "$54.99",
    rating: 4.4,
    description: "1250 calories per serving with complex carbs",
    category: "Protein",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Mass+Gainer"
  },
  {
    id: 6,
    name: "Fish Oil Omega-3",
    price: "$24.99",
    rating: 4.9,
    description: "High-strength EPA & DHA formula",
    category: "Health",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Fish+Oil"
  },
  {
    id: 7,
    name: "Multivitamin Elite",
    price: "$19.99",
    rating: 4.7,
    description: "Complete spectrum of essential vitamins",
    category: "Health",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Multivitamin"
  },
  {
    id: 8,
    name: "Casein Protein",
    price: "$44.99",
    rating: 4.6,
    description: "Slow-release protein for overnight recovery",
    category: "Protein",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=Casein"
  },
  {
    id: 9,
    name: "ZMA Complex",
    price: "$29.99",
    rating: 4.5,
    description: "Zinc, Magnesium & B6 for recovery",
    category: "Recovery",
    image: "https://placehold.co/400x400/252934/FFFFFF/png?text=ZMA"
  }
];

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div
      className="bg-gray-900/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
          onLoad={() => setIsImageLoaded(true)}
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {product.category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <Heart 
            className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
              isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
        </div>
        
        <p className="text-gray-400 text-sm mt-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-white">{product.price}</span>
          <div className="flex items-center bg-gray-800 px-2 py-1 rounded">
            <Star className="text-yellow-400 w-4 h-4" />
            <span className="ml-1 text-sm text-white">{product.rating}</span>
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Supplements = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [cartItems, setCartItems] = React.useState([]);
  
  const categories = ["All", ...new Set(supplements.map(item => item.category))];
  
  const filteredSupplements = selectedCategory === "All" 
    ? supplements 
    : supplements.filter(item => item.category === selectedCategory);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-6">Premium Supplements</h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Discover our range of high-quality supplements designed to support your fitness journey
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSupplements.map((supplement) => (
            <ProductCard
              key={supplement.id}
              product={supplement}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supplements;