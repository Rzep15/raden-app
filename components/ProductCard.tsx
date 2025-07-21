import React from 'react';
import { Plus, Clock, Sparkles, Shield } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 border border-gray-100/50 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-black px-4 py-2 rounded-2xl text-sm flex items-center space-x-1 shadow-2xl font-bold">
          <Sparkles size={14} className="fill-current" />
          <span>PREMIUM</span>
        </div>

        {product.duration && (
          <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-xl text-sm flex items-center space-x-1">
            <Clock size={14} />
            <span className="font-semibold">{product.duration}</span>
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-xl text-sm flex items-center space-x-1">
          <Shield size={14} />
          <span>Verified</span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{product.description}</p>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-2xl border border-blue-200/50 font-medium shadow-sm"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-gray-500 text-xs sm:text-sm bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-2 rounded-2xl font-medium">
                +{product.features.length - 3} fitur lainnya
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 bg-clip-text text-transparent">
                Rp {product.price.toLocaleString('id-ID')}
              </span>
              {product.originalPrice && (
                <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through font-semibold">
                  Rp {product.originalPrice.toLocaleString('id-ID')}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">per bulan</p>
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 font-bold text-sm sm:text-base"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;