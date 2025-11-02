
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from './CartContext';
import { Header } from './Header';
import { Footer } from './Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const ConfiguratorPage = lazy(() => import("./pages/ConfiguratorPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const LegalPage = lazy(() => import("./LegalPage"));

const LoadingFallback: React.FC = () => (
    <div className="flex items-center justify-center h-screen bg-slate-100 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>
    </div>
);

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/configurator" element={<ConfiguratorPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  {/* Fallback route can be added here */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </HashRouter>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
