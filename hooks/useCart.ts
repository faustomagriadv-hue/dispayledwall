import { useState } from "react";

export const useCart = () => {
  const [items, setItems] = useState<any[]>([]);

  // ✅ Funzione per aggiungere un prodotto al carrello
  const addToCart = (item: any) => {
    setItems((prev) => [...prev, item]);
  };

  // ✅ Funzione per rimuovere un prodotto
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  // ✅ Funzione per svuotare il carrello
  const clearCart = () => setItems([]);

  // ✅ Numero di prodotti nel carrello
  const cartCount = items.length;

  return { items, addToCart, removeItem, clearCart, cartCount };
};
