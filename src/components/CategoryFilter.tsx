import React from 'react';
import { Smartphone, Gamepad2, Briefcase, Palette, Grid3X3, Sparkles } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'Semua Produk', icon: Grid3X3, gradient: 'from-gray-600 to-gray-700' },
  { id: 'entertainment', name: 'Entertainment', icon: Smartphone, gradient: 'from-blue-500 to-purple-600' },
  { id: 'design', name: 'Design & Video', icon: Palette, gradient: 'from-pink-500 to-rose-600' },
  { id: 'productivity', name: 'Produktivitas', icon: Briefcase, gradient: 'from-orange-500 to-red-600' },
  { id: 'vpn', name: 'VPN & Security', icon: Gamepad2, gradient: 'from-green-500 to-emerald-600' },
  { id: 'education', name: 'Education', icon: Briefcase, gradient: 'from-purple-500 to-indigo-600' },
];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div id="products" className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-12 border border-gray-200/50">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
          <Sparkles size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Pilih Kategori Premium
        </h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 ${
                isSelected
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl scale-105 ring-4 ring-white/30`
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg hover:shadow-xl border border-gray-200/50'
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  isSelected 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : `bg-gradient-to-r ${category.gradient} text-white group-hover:scale-110 shadow-lg`
                }`}>
                  <Icon size={24} />
                </div>
                <span className={`font-bold text-sm text-center leading-tight ${
                  isSelected ? 'text-white' : 'text-gray-800'
                }`}>
                  {category.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;