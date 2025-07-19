export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'premium' | 'game' | 'productivity' | 'design';
  features: string[];
  duration?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Netflix Premium',
    description: 'Akses unlimited ke semua konten Netflix dengan kualitas 4K',
    price: 25000,
    originalPrice: 169000,
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'premium',
    features: ['4K Ultra HD', 'Unlimited Downloads', '4 Screens', 'No Ads'],
    duration: '1 Bulan'
  },
  {
    id: '2',
    name: 'Spotify Premium',
    description: 'Nikmati musik tanpa batas dan tanpa iklan',
    price: 20000,
    originalPrice: 54990,
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'premium',
    features: ['No Ads', 'Offline Download', 'High Quality Audio', 'Unlimited Skips'],
    duration: '1 Bulan'
  },
  {
    id: '3',
    name: 'YouTube Premium',
    description: 'Tonton video tanpa iklan dan akses YouTube Music',
    price: 30000,
    originalPrice: 79000,
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'premium',
    features: ['Ad-Free Videos', 'Background Play', 'YouTube Music', 'Offline Downloads'],
    duration: '1 Bulan'
  },
  {
    id: '4',
    name: 'Adobe Creative Suite',
    description: 'Akses lengkap ke semua aplikasi Adobe Creative Cloud',
    price: 150000,
    originalPrice: 799000,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Cloud Storage'],
    duration: '1 Bulan'
  },
  {
    id: '5',
    name: 'Microsoft Office 365',
    description: 'Suite produktivitas lengkap dari Microsoft',
    price: 45000,
    originalPrice: 139000,
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'productivity',
    features: ['Word', 'Excel', 'PowerPoint', 'OneDrive 1TB', 'Teams'],
    duration: '1 Bulan'
  },
  {
    id: '6',
    name: 'Canva Pro',
    description: 'Design tool profesional dengan template premium',
    price: 35000,
    originalPrice: 119000,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'design',
    features: ['Premium Templates', 'Background Remover', 'Brand Kit', 'Unlimited Storage'],
    duration: '1 Bulan'
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