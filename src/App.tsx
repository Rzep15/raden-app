import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products, Product } from './data/products';
import { Instagram, MessageCircle, Crown, Star } from 'lucide-react';

interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header 
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-20">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-16 max-w-lg mx-auto border border-gray-200/50">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown size={40} className="text-gray-500" />
              </div>
              <p className="text-gray-600 text-xl mb-3 font-semibold">
                {searchTerm ? 'Tidak ada produk yang ditemukan' : 'Tidak ada produk dalam kategori ini'}
              </p>
              <p className="text-gray-500 text-base">
                {searchTerm ? 'Coba kata kunci lain atau pilih kategori berbeda' : 'Silakan pilih kategori lain untuk melihat produk premium kami'}
              </p>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white py-16 mt-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative">
              <img 
                src="/public/Logo.png" 
                alt="Raden Store" 
                className="w-16 h-16 rounded-2xl object-cover shadow-2xl ring-4 ring-white/20"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                <Crown size={16} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                RADEN STORE
              </h3>
              <div className="flex items-center justify-center space-x-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-slate-200 mb-8 text-xl font-light max-w-2xl mx-auto">
            Toko premium apps terpercaya dengan layanan terbaik di Indonesia
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a 
              href="https://instagram.com/raden.stor3" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
            >
              <Instagram size={24} />
              <span className="font-bold text-lg">@raden.stor3</span>
            </a>
            <a 
              href="https://wa.me/6282233331156" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105"
            >
              <MessageCircle size={24} />
              <span className="font-bold text-lg">+62 822-3333-1156</span>
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-slate-300 text-base">
              © 2024 Raden Store. All rights reserved. | Premium Apps Collection
            </p>
          </div>
        </div>
      </footer>
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;