export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'premium' | 'game' | 'productivity' | 'design' | 'vpn' | 'entertainment' | 'education';
  features: string[];
  duration?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Netflix Premium',
    description: 'Akses unlimited ke semua konten Netflix dengan kualitas 4K',
    price: 35000,
    originalPrice: 169000,
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['4K Ultra HD', 'Unlimited Downloads', '4 Screens', 'No Ads'],
    duration: '1 Bulan'
  },
  {
    id: '2',
    name: 'CapCut Pro',
    description: 'Editor video profesional dengan fitur premium lengkap',
    price: 15000,
    originalPrice: 139000,
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['Premium Templates', 'No Watermark', 'HD Export', 'Advanced Effects'],
    duration: '30 Hari'
  },
  {
    id: '3',
    name: 'CapCut Pro Weekly',
    description: 'Editor video profesional dengan akses premium selama 7 hari',
    price: 5000,
    originalPrice: 35000,
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['Premium Templates', 'No Watermark', 'HD Export', 'Advanced Effects'],
    duration: '7 Hari'
  },
  {
    id: '4',
    name: 'YouTube Premium',
    description: 'Tonton video tanpa iklan dan akses YouTube Music',
    price: 10000,
    originalPrice: 79000,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['Ad-Free Videos', 'Background Play', 'YouTube Music', 'Offline Downloads'],
    duration: '1 Bulan'
  },
  {
    id: '5',
    name: 'ChatGPT Plus',
    description: 'AI assistant terdepan dengan akses GPT-4 dan fitur premium',
    price: 50000,
    originalPrice: 280000,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'productivity',
    features: ['GPT-4 Access', 'Faster Response', 'Priority Access', 'Advanced Features'],
    duration: '1 Bulan'
  },
  {
    id: '6',
    name: 'Canva Pro',
    description: 'Design tool profesional dengan template premium',
    price: 5000,
    originalPrice: 119000,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['Premium Templates', 'Background Remover', 'Brand Kit', 'Unlimited Storage'],
    duration: '1 Bulan'
  },
  {
    id: '7',
    name: 'Perplexity Pro',
    description: 'AI search engine dengan akses unlimited dan fitur premium',
    price: 15000,
    originalPrice: 280000,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'productivity',
    features: ['Unlimited Searches', 'GPT-4 Access', 'No Ads', 'Priority Support'],
    duration: '1 Bulan'
  },
  {
    id: '8',
    name: 'HMA VPN',
    description: 'VPN premium dengan server global dan keamanan tinggi',
    price: 10000,
    originalPrice: 89000,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vpn',
    features: ['190+ Countries', 'No Logs Policy', 'Lightning Fast', 'Kill Switch'],
    duration: '1 Bulan'
  },
  {
    id: '9',
    name: 'ExpressVPN',
    description: 'VPN tercepat di dunia dengan enkripsi tingkat militer',
    price: 10000,
    originalPrice: 139000,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vpn',
    features: ['94+ Countries', 'Military Encryption', 'No Activity Logs', '24/7 Support'],
    duration: '1 Bulan'
  },
  {
    id: '10',
    name: 'VIU Premium',
    description: 'Streaming drama Asia terlengkap tanpa iklan',
    price: 10000,
    originalPrice: 120000,
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['Ad-Free Streaming', 'HD Quality', 'Offline Download', 'Exclusive Content'],
    duration: '1 Tahun'
  },
  {
    id: '11',
    name: 'WeTV Premium',
    description: 'Platform streaming drama dan variety show Asia',
    price: 30000,
    originalPrice: 89000,
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['Premium Content', 'No Ads', 'HD Streaming', 'Early Access'],
    duration: '1 Bulan'
  },
  {
    id: '12',
    name: 'Disney Plus Sharing',
    description: 'Akses ke semua konten Disney, Marvel, Star Wars, dan Pixar',
    price: 20000,
    originalPrice: 139000,
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['Disney Content', 'Marvel Movies', 'Star Wars', '4K Streaming'],
    duration: '1 Bulan'
  },
  {
    id: '13',
    name: 'Apple Music',
    description: 'Streaming musik dengan kualitas lossless dan spatial audio',
    price: 15000,
    originalPrice: 69000,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['Lossless Audio', 'Spatial Audio', 'Offline Downloads', '100M+ Songs'],
    duration: '1 Bulan'
  },
  {
    id: '14',
    name: 'Spotify Premium',
    description: 'Nikmati musik tanpa batas dan tanpa iklan',
    price: 15000,
    originalPrice: 54990,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'entertainment',
    features: ['No Ads', 'Offline Download', 'High Quality Audio', 'Unlimited Skips'],
    duration: '1 Bulan'
  },
  {
    id: '15',
    name: 'Alight Motion Pro',
    description: 'Editor video dan animasi profesional untuk mobile',
    price: 10000,
    originalPrice: 59000,
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['No Watermark', 'Vector Graphics', 'Visual Effects', 'Keyframe Animation'],
    duration: '1 Bulan'
  },
  {
    id: '16',
    name: 'Duolingo Super',
    description: 'Belajar bahasa dengan fitur premium dan tanpa iklan',
    price: 10000,
    originalPrice: 89000,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'education',
    features: ['No Ads', 'Unlimited Hearts', 'Progress Quizzes', 'Offline Lessons'],
    duration: '30 Hari'
  },
  {
    id: '17',
    name: 'Scribd Premium',
    description: 'Akses unlimited ke ebook, audiobook, dan dokumen',
    price: 10000,
    originalPrice: 139000,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'education',
    features: ['Unlimited Books', 'Audiobooks', 'Documents', 'Offline Reading'],
    duration: '30 Hari'
  }
];

// Fungsi untuk menambah produk baru
export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString()
  };
  products.push(newProduct);
  return newProduct;
};

// Fungsi untuk menghapus produk
export const removeProduct = (id: string): boolean => {
  const index = products.findIndex(product => product.id === id);
  if (index > -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
};

// Fungsi untuk update produk
export const updateProduct = (id: string, updates: Partial<Product>): Product | null => {
  const index = products.findIndex(product => product.id === id);
  if (index > -1) {
    products[index] = { ...products[index], ...updates };
    return products[index];
  }
  return null;
};