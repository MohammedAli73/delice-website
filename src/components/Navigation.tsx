import React, { useState } from 'react';
import logoImage from 'figma:asset/9474fa7fe52a0142eeac3ff7d24550ae50ac993e.png';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'menu', label: 'Notre Menu', icon: '📋' },
    { id: 'reviews', label: 'Avis', icon: '⭐' }
  ];

  const handleMenuItemClick = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Ferme le menu mobile après sélection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Délice Rouge Logo" 
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-red-600">Délice Rouge</h1>
              <p className="text-sm text-gray-600">Boucherie • Épicerie • Snack</p>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-red-50'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}