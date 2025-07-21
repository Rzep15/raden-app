import React from 'react';
import { ShoppingCart, Instagram, MessageCircle, Crown } from 'lucide-react';
import { APP_CONFIG, SOCIAL_LINKS } from '@/config/constants';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src={APP_CONFIG.logo} 
                alt="Raden Store" 
                className="w-14 h-14 rounded-2xl object-cover shadow-xl ring-4 ring-gradient-to-r from-blue-400 to-purple-400"
              />
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                <Crown size={12} className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                RADEN STORE
              </h1>
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Premium Apps Collection
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href={SOCIAL_LINKS.instagram.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
            >
              <Instagram size={18} />
              <span className="font-semibold">{SOCIAL_LINKS.instagram.username}</span>
            </a>
            
            <a 
              href={SOCIAL_LINKS.whatsapp.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
            >
              <MessageCircle size={18} />
              <span className="font-semibold">WhatsApp</span>
            </a>
            
            <button
              onClick={onCartClick}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              <ShoppingCart size={20} />
              <span className="hidden sm:inline font-semibold">Keranjang</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-7 h-7 flex items-center justify-center animate-bounce font-bold shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;