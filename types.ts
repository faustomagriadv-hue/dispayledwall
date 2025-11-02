
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  price: number;
  discount: number;
  details: {
    modules: string;
    pitch: string;
    cabinetSize: string;
    notes: string;
  };
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ConfiguratorState {
  moduleType: 'Classici' | 'Manutenzione frontale' | 'Soft/Pieghevoli' | null;
  pitch: string | null;
  desiredWidth: number;
  desiredHeight: number;
  modulesW: number;
  modulesH: number;
  finalWidth: number;
  finalHeight: number;
  casingMaterial: 'ferro' | 'dibond' | null;
  casingColor: string;
  exposure: 'Interno' | 'Esterno' | null;
  energySaving: boolean;
  autoOff: boolean;
  contentLoading: {
    usb: boolean;
    lan: boolean;
    remote: boolean;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}
