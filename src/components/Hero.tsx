import React from 'react';
import { Shield, Zap, Award, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-2xl">
            <Star size={16} className="fill-current" />
            <span>PREMIUM QUALITY</span>
            <Star size={16} className="fill-current" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="block text-white">Premium Apps</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Harga Terjangkau
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-16 text-slate-200 leading-relaxed max-w-3xl mx-auto font-light">
            Nikmati akses premium ke aplikasi favorit Anda dengan harga yang sangat terjangkau. 
            <span className="text-cyan-300 font-semibold"> Kualitas terjamin, pelayanan terpercaya!</span>
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">100% Aman</h3>
              <p className="text-slate-300 text-lg">Legal dan terpercaya dengan garansi keamanan penuh</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Respon</h3>
              <p className="text-slate-300 text-lg">Aktivasi instan dalam hitungan menit</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Terpercaya</h3>
              <p className="text-slate-300 text-lg">Ribuan pelanggan puas di seluruh Indonesia</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-16">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Lihat Produk Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;