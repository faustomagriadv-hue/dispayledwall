
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import type { CartItem } from '../types';

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const CartItemRow: React.FC<{ item: CartItem }> = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();
    const discountedPrice = item.price * (1 - item.discount);

    return (
        <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-zinc-700 flex-wrap">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" loading="lazy" />
                <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">€{discountedPrice.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 dark:border-zinc-600 rounded-md">
                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-700 rounded-l-md">-</button>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                        className="w-12 text-center bg-transparent border-l border-r border-gray-300 dark:border-zinc-600 focus:outline-none"
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-700 rounded-r-md">+</button>
                </div>
                <p className="font-bold w-24 text-right">€{(discountedPrice * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
};


const CartPage: React.FC = () => {
    const { cartItems, cartCount, cartTotal, clearCart } = useCart();

    if (cartCount === 0) {
        return (
            <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold mb-4">Il tuo carrello è vuoto</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Sembra che tu non abbia ancora aggiunto nulla. Inizia a esplorare i nostri prodotti!</p>
                    <Link to="/" className="inline-block bg-accent hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
                        Torna alla Home
                    </Link>
                </div>
            </div>
        );
    }
    
    const handleCheckout = () => {
        alert('Grazie per il tuo ordine! Verrai reindirizzato al pagamento.');
        clearCart();
    };

    return (
        <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12 sm:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-center mb-12">Il Tuo Carrello</h1>
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2 bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
                         {cartItems.map(item => <CartItemRow key={item.id} item={item} />)}
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="sticky top-24 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg">
                             <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-zinc-700">Riepilogo Ordine</h2>
                            <div className="space-y-2 text-lg">
                                <div className="flex justify-between">
                                    <span>Subtotale</span>
                                    <span>€{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Spedizione</span>
                                    <span className="text-green-600 dark:text-green-400">Gratis</span>
                                </div>
                                <div className="flex justify-between font-bold text-xl pt-4 border-t border-gray-200 dark:border-zinc-700">
                                    <span>Totale</span>
                                    <span>€{cartTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button onClick={handleCheckout} className="w-full mt-6 bg-accent hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg">
                                Procedi al Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
