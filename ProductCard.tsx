
import React from 'react';
import type { Product } from './types';
import { Link } from 'react-router-dom';
import { useCart } from "./hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discount);
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.image} alt={product.name} loading="lazy" />
        <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-bl-lg font-bold">
          -{product.discount * 100}%
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{product.shortDescription}</p>
        <div className="mb-4">
            <span className="text-gray-500 dark:text-gray-400 line-through mr-2">€{product.price.toFixed(2)}</span>
            <span className="text-2xl font-bold text-accent">€{discountedPrice.toFixed(2)}</span>
        </div>
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link to={`/product/${product.id}`} className="w-full text-center bg-transparent border border-accent text-accent hover:bg-accent hover:text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Dettagli
          </Link>
          <button onClick={() => addToCart(product)} className="w-full bg-accent hover:bg-accent-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
};
