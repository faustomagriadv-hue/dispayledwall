import React from "react";
import { useCart } from "../hooks/useCart";

export const CartPage = () => {
  const { items, removeItem, clearCart } = useCart();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Carrello</h1>
      {items.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}€
                <button onClick={() => removeItem(item.id)}>Rimuovi</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Svuota carrello</button>
        </>
      )}
    </div>
  );
};
