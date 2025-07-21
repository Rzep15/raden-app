export const APP_CONFIG = {
  title: import.meta.env.VITE_APP_TITLE || 'Raden Store - Premium Apps',
  description: import.meta.env.VITE_APP_DESCRIPTION || 'Toko premium apps terpercaya dengan layanan terbaik di Indonesia',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/raden.stor3',
  whatsapp: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/6282233331156',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '6282233331156',
  logo: '/Logo.png'
};

export const SOCIAL_LINKS = {
  instagram: {
    url: APP_CONFIG.instagram,
    username: '@raden.stor3'
  },
  whatsapp: {
    url: APP_CONFIG.whatsapp,
    number: '+62 822-3333-1156'
  }
};