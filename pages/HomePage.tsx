
import React from 'react';
import { ProductCard } from '../ProductCard';
import { TrustBadge } from '../TrustBadge';
import { PRODUCTS } from './constants';
import { Link } from 'react-router-dom';

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 3.056c4.5-1.17 8-5.228 8-9.944a12.02 12.02 0 00-1.382-5.944z" /></svg>
);
const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const DeviceMobileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);
const SupportIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9 12l.01 0M15 12l.01 0M12 9l0 .01M12 15l0 .01M5.636 18.364l3.536-3.536m5.656 0l3.536-3.536M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg>
);

// FIX: Export the HomePage component to allow it to be lazy-loaded in App.tsx.
export const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="bg-anthracite text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            LEDwall professionali, pronti a crescere con il tuo <span className="text-accent">brand</span>.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Soluzioni su misura e a catalogo per dare vita alla tua comunicazione visiva.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link to="/products" className="inline-block bg-accent hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Acquista ora
            </Link>
            <Link to="/configurator" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Crea il tuo preventivo
            </Link>
          </div>
        </div>
      </section>

      {/* Prodotti in Vetrina */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Prodotti in Vetrina</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-gray-200 dark:bg-zinc-800 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <TrustBadge icon={<ShieldCheckIcon />} text="Certificazione IP65" />
                  <TrustBadge icon={<ZapIcon />} text="Risparmio Energetico" />
                  <TrustBadge icon={<DeviceMobileIcon />} text="Gestione da App/Sito" />
                  <TrustBadge icon={<SupportIcon />} text="Supporto Dedicato" />
              </div>
          </div>
      </section>

      {/* Galleria Progetti */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Progetti Realizzati</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={`https://picsum.photos/seed/gallery${i}/600/400`} alt={`Progetto ${i+1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" loading="lazy"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Installazione per Fiera</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
