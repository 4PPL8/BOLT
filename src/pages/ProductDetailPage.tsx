import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Package, Check } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { getProduct } = useProducts();
  
  if (!id) {
    return <Navigate to="/products" replace />;
  }

  const product = getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Product Image */}
            <div className="aspect-square lg:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Cash on Delivery Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-yellow-600" />
                  <span className="text-yellow-800 font-medium">Cash on Delivery Available</span>
                </div>
                <p className="text-yellow-700 text-sm mt-1">
                  Pay when you receive your order for your convenience and peace of mind.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center font-semibold py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us for Orders
                </Link>
                <Link
                  to={`/products/${encodeURIComponent(product.category)}`}
                  className="block w-full border-2 border-gray-300 text-gray-700 text-center font-semibold py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  View Similar Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;