import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useCart } from './hooks/useCart';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.707.707a2 2 0 002.828 0l.707-.707M12 21v-4M4.22 10.22l1.414 1.414M18.364 11.636l1.414-1.414M12 6a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-accent text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;
  
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive
        ? 'bg-accent text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <nav className="bg-anthracite dark:bg-anthracite/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-bold text-xl">
              Display<span className="text-accent">LedWall</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/configurator" className={navLinkClass}>Richiedi preventivo</NavLink>
              <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
              <NavLink to="/about" className={navLinkClass}>Chi Siamo</NavLink>
            </div>
          </div>
          <div className="flex items-center">
             <div className="relative hidden md:inline-block mr-4">
                <button className="flex items-center text-gray-300 hover:text-white">
                    <GlobeIcon/>
                    <span className="ml-1 text-sm">IT</span>
                </button>
             </div>
             <NavLink to="/cart" className="relative p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-label="Vedi carrello">
                <CartIcon />
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {cartCount}
                    </span>
                )}
            </NavLink>
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <div className="ml-2 -mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/configurator" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Richiedi preventivo</NavLink>
            <NavLink to="/faq" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Chi Siamo</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};