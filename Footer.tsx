import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-anthracite text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} DisplayLedWall. Tutti i diritti riservati.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm hover:text-accent dark:hover:text-accent-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-accent dark:hover:text-accent-300 transition-colors">Termini e Condizioni</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};