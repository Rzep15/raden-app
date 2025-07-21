import React, { useState } from 'react';
import { ArrowLeft, User, Phone, Send, ShoppingBag } from 'lucide-react';
import { Product } from '@/data/products';
import { APP_CONFIG } from '@/config/constants';

interface CartItem extends Product {
  quantity: number;
}

interface OrderFormProps {
  items: CartItem[];
  total: number;
  onBack: () => void;
  onClose: () => void;
  onSuccess: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ items, total, onBack, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    let message = `🛍️ *PESANAN BARU - RADEN STORE* 🛍️\n\n`;
    message += `👤 *Data Pelanggan:*\n`;
    message += `📝 Nama: ${formData.name}\n`;
    message += `📱 No. HP: ${formData.phone}\n\n`;
    
    message += `📦 *Detail Pesanan:*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. 📱 ${item.name}\n`;
      message += `   📊 Qty: ${item.quantity}x\n`;
      message += `   💰 Harga: Rp ${item.price.toLocaleString('id-ID')}\n`;
      message += `   💵 Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });
    
    message += `💎 *Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*\n\n`;
    message += `🙏 Terima kasih telah mempercayai Raden Store!\n`;
    message += `⚡ Aktivasi akan diproses segera setelah pembayaran\n`;
    message += `🔒 100% Aman & Terpercaya`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert('Mohon lengkapi nama dan nomor HP');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6 border-b">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">Form Pemesanan</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User size={16} className="inline mr-2" />
                Nama Pemesan *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone size={16} className="inline mr-2" />
                Nomor HP *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
              <ShoppingBag size={18} className="text-blue-600" />
              <span>Ringkasan Pesanan:</span>
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="flex-1 pr-2 flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{item.name} x{item.quantity}</span>
                  </span>
                  <span className="font-medium text-green-600">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-3 pt-3">
              <div className="flex justify-between items-center font-bold text-lg">
                <span className="flex items-center space-x-2">
                  <span className="text-2xl">💰</span>
                  <span>Total:</span>
                </span>
                <span className="text-green-600">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-lg hover:shadow-green-500/25 transform hover:scale-105"
          >
            <div className="bg-white/20 p-1 rounded-full">
              <Send size={16} />
            </div>
            <span>Kirim ke WhatsApp</span>
          </button>

          <p className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center space-x-1">
            <span>🔒</span>
            <span>Dengan melanjutkan, pesanan akan dikirim ke WhatsApp kami untuk diproses</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;