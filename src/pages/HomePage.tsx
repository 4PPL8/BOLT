import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Truck, Star } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const { products, categories } = useProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Al Buraq Industries
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We bring you a diverse range of high-quality personal care products, stationery, 
              adhesives, baby essentials, herbal remedies, and household items. Our focus is on 
              reliability, durability, and value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Al Buraq Industries?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              With a simple user interface and clean browsing experience, you can view our entire collection with ease.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">High-quality products that meet industry standards and customer expectations.</p>
            </div>
            <div className="text-center group">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors duration-300">
                <Package className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Diverse Range</h3>
              <p className="text-gray-600">From personal care to household items, we have everything you need.</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cash on Delivery</h3>
              <p className="text-gray-600">Convenient payment option available for your peace of mind.</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">Trusted by customers for consistent quality and dependable service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our wide range of product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category}
                to={`/products/${encodeURIComponent(category)}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold
                  ${index % 4 === 0 ? 'bg-blue-500' : 
                    index % 4 === 1 ? 'bg-yellow-500' : 
                    index % 4 === 2 ? 'bg-green-500' : 'bg-purple-500'}`}>
                  {category.charAt(0)}
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Discover some of our most popular products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;