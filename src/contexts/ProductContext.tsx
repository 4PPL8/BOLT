import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  categories: string[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const initialProducts: Product[] = [
  // Cosmetics & Personal Care
  {
    id: '1',
    name: 'Balo Color',
    category: 'Cosmetics & Personal Care',
    description: 'High-quality hair color for vibrant and long-lasting results.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    features: ['Long-lasting color', 'Natural ingredients', 'Easy application']
  },
  {
    id: '2',
    name: 'Grace Color',
    category: 'Cosmetics & Personal Care',
    description: 'Premium hair coloring solution with excellent coverage.',
    image: 'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg',
    features: ['Premium quality', 'Excellent coverage', 'Hair-friendly formula']
  },
  {
    id: '3',
    name: 'Veloria Facial',
    category: 'Cosmetics & Personal Care',
    description: 'Gentle facial cream for smooth and radiant skin.',
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    features: ['Gentle formula', 'Radiant skin', 'Moisturizing effect']
  },
  // Razors
  {
    id: '4',
    name: 'Sharp Razor',
    category: 'Razors',
    description: 'Professional-grade razor for precise and comfortable shaving.',
    image: 'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg',
    features: ['Sharp blade', 'Comfortable grip', 'Precise cutting']
  },
  {
    id: '5',
    name: 'Ujala Razor',
    category: 'Razors',
    description: 'Reliable razor for everyday grooming needs.',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
    features: ['Reliable quality', 'Everyday use', 'Affordable price']
  },
  // Toothbrush
  {
    id: '6',
    name: 'Mister Clean Toothbrush',
    category: 'Toothbrush',
    description: 'High-quality toothbrush for optimal oral hygiene.',
    image: 'https://images.pexels.com/photos/298586/pexels-photo-298586.jpeg',
    features: ['Soft bristles', 'Ergonomic handle', 'Effective cleaning']
  },
  // Agarbatti
  {
    id: '7',
    name: 'Mahfil Milan',
    category: 'Agarbatti (Incense Sticks)',
    description: 'Premium incense sticks with enchanting fragrance.',
    image: 'https://images.pexels.com/photos/6663598/pexels-photo-6663598.jpeg',
    features: ['Premium quality', 'Long-lasting fragrance', 'Natural ingredients']
  },
  {
    id: '8',
    name: 'Golden Milan',
    category: 'Agarbatti (Incense Sticks)',
    description: 'Luxurious incense sticks for a calming atmosphere.',
    image: 'https://images.pexels.com/photos/6663604/pexels-photo-6663604.jpeg',
    features: ['Luxurious fragrance', 'Calming effect', 'High-quality materials']
  },
  // Natural/Herbal Products
  {
    id: '9',
    name: 'Natural ISP',
    category: 'Natural / Herbal Products',
    description: 'Natural herbal supplement for health and wellness.',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
    features: ['Natural ingredients', 'Health benefits', 'Traditional formula']
  },
  {
    id: '10',
    name: 'Jor Joshanda',
    category: 'Natural / Herbal Products',
    description: 'Traditional herbal remedy for respiratory wellness.',
    image: 'https://images.pexels.com/photos/4021807/pexels-photo-4021807.jpeg',
    features: ['Traditional remedy', 'Natural herbs', 'Respiratory support']
  },
  // Adhesive Tape
  {
    id: '11',
    name: 'Lemon Adhesive Tape',
    category: 'Adhesive Tape',
    description: 'High-quality adhesive tape for various applications.',
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg',
    features: ['Strong adhesion', 'Versatile use', 'Durable material']
  },
  // Baby Products
  {
    id: '12',
    name: 'Silicon Nipple',
    category: 'Baby Products (Soothers)',
    description: 'Safe and comfortable silicon soother for babies.',
    image: 'https://images.pexels.com/photos/1296397/pexels-photo-1296397.jpeg',
    features: ['Food-grade silicon', 'Comfortable design', 'Easy to clean']
  }
];

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, []);

  const saveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const categories = [
    'Cosmetics & Personal Care',
    'Razors',
    'Toothbrush',
    'Agarbatti (Incense Sticks)',
    'Natural / Herbal Products',
    'Adhesive Tape',
    'PVC Tape',
    'Stationery',
    'Stationery Tapes',
    'Baby Products (Soothers)',
    'Cleaning Products',
    'Pest Control',
    'Craft Supplies'
  ];

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = {
      ...product,
      id: Date.now().toString()
    };
    const newProducts = [...products, newProduct];
    saveProducts(newProducts);
  };

  const updateProduct = (id: string, updatedProduct: Omit<Product, 'id'>) => {
    const newProducts = products.map(product =>
      product.id === id ? { ...updatedProduct, id } : product
    );
    saveProducts(newProducts);
  };

  const deleteProduct = (id: string) => {
    const newProducts = products.filter(product => product.id !== id);
    saveProducts(newProducts);
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };

  return (
    <ProductContext.Provider value={{
      products,
      categories,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      getProductsByCategory
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};