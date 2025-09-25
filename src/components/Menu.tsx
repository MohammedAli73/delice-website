import React, { useState, useMemo } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const menuData: MenuItem[] = [
  // Boucherie
  {
    id: '1',
    name: 'Côte de Bœuf Premium',
    description: 'Côte de bœuf de qualité supérieure, tendre et savoureuse',
    price: '8.500 FCFA/kg',
    category: 'boucherie',
    image: 'https://images.unsplash.com/photo-1738703887298-e0a2f9b85058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlZWYlMjBtZWF0JTIwY3V0cyUyMGNsZWFufGVufDF8fHx8MTc1ODgxNDgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    name: 'Poulet Fermier',
    description: 'Poulet fermier local, élevé au grain',
    price: '3.200 FCFA/kg',
    category: 'boucherie',
    image: 'https://images.unsplash.com/photo-1629966207968-16b1027bed09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNoaWNrZW4lMjBtZWF0JTIwY2xlYW4lMjB3aGl0ZXxlbnwxfHx8fDE3NTg4MTQ4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    name: 'Bœuf Haché Frais',
    description: 'Viande de bœuf hachée fraîche, idéale pour vos plats',
    price: '4.800 FCFA/kg',
    category: 'boucherie',
    image: 'https://images.unsplash.com/photo-1738703887298-e0a2f9b85058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlZWYlMjBtZWF0JTIwY3V0cyUyMGNsZWFufGVufDF8fHx8MTc1ODgxNDgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    name: 'Chèvre Local',
    description: 'Viande de chèvre fraîche, élevage traditionnel local',
    price: '5.500 FCFA/kg',
    category: 'boucherie',
    image: 'https://images.unsplash.com/photo-1738703887298-e0a2f9b85058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJlZWYlMjBtZWF0JTIwY3V0cyUyMGNsZWFufGVufDF8fHx8MTc1ODgxNDgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // Épicerie
  {
    id: '5',
    name: 'Riz Importé Premium',
    description: 'Riz de qualité supérieure, grain long parfumé',
    price: '1.200 FCFA/kg',
    category: 'epicerie',
    image: 'https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmljZSUyMGdyYWlucyUyMGJvd2wlMjBjbGVhbnxlbnwxfHx8fDE3NTg4MTQ4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    name: 'Huile de Palme Pure',
    description: 'Huile de palme rouge artisanale, production locale',
    price: '2.500 FCFA/L',
    category: 'epicerie',
    image: 'https://images.unsplash.com/photo-1612425337977-c214493ce24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwb2lsJTIwYm90dGxlJTIwcmVkJTIwY2xlYW58ZW58MXx8fHwxNzU4ODE0ODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '7',
    name: 'Miel d\'Abeilles Local',
    description: 'Miel pur des ruches locales, récolte traditionnelle',
    price: '3.500 FCFA/pot',
    category: 'epicerie',
    image: 'https://images.unsplash.com/photo-1719871766551-b9ecf87eee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMG5hdHVyYWwlMjBjbGVhbnxlbnwxfHx8fDE3NTg4MTQ4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '8',
    name: 'Légumes de Saison',
    description: 'Panier de légumes frais du marché de Brazzaville',
    price: 'Variable',
    category: 'epicerie',
    image: 'https://images.unsplash.com/photo-1757445352772-e66b51e97fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjbGVhbiUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU4ODE0ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },

  // Restaurant
  {
    id: '9',
    name: 'Sandwich Délice Rouge',
    description: 'Pain frais, jambon, fromage, tomates et salade',
    price: '2.000 FCFA',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1757961048411-73703e333d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc2FuZHdpY2glMjBjbGVhbiUyMHBsYXRlfGVufDF8fHx8MTc1ODgxNDg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '10',
    name: 'Salade Mixte',
    description: 'Salade verte, poulet grillé, tomates, concombres',
    price: '2.500 FCFA',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1678831654422-f4f8f22e0cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bCUyMGNsZWFuJTIwbGlnaHR8ZW58MXx8fHwxNzU4ODE0ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '11',
    name: 'Poisson Grillé',
    description: 'Poisson frais grillé aux épices locales, accompagné de plantain',
    price: '4.200 FCFA',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1602022131768-033a8796e78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMGNsZWFuJTIwcGxhdGUlMjBzaW1wbGV8ZW58MXx8fHwxNzU4ODE0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '12',
    name: 'Plat Africain du Jour',
    description: 'Spécialité quotidienne de cuisine africaine traditionnelle',
    price: '3.500 FCFA',
    category: 'restaurant',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY3Vpc2luZSUyMHBsYXRlJTIwY2xlYW4lMjBzaW1wbGV8ZW58MXx8fHwxNzU4ODE0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('boucherie');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'boucherie', name: 'Boucherie', icon: '🥩', color: 'red' },
    { id: 'epicerie', name: 'Épicerie', icon: '🛒', color: 'green' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️', color: 'orange' }
  ];

  // Filtrage avec recherche et catégorie
  const filteredItems = useMemo(() => {
    let filtered = menuData;
    
    // Filtrer par catégorie
    if (activeCategory) {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Filtrer par terme de recherche
    if (searchTerm.trim()) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [activeCategory, searchTerm]);

  const getColorClasses = (color: string, active: boolean) => {
    const colorMap = {
      red: active ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100',
      green: active ? 'bg-green-600 text-white' : 'bg-green-50 text-green-600 hover:bg-green-100',
      orange: active ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
    };
    return colorMap[color as keyof typeof colorMap] || '';
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header with Background Image */}
      <div className="relative mb-12 rounded-2xl overflow-hidden">
        <div className="relative h-64 w-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1722101202698-20b04dcc440d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpY2lvdXMlMjByZXN0YXVyYW50JTIwbWVudSUyMGhlYWRlcnxlbnwxfHx8fDE3NTg4MTQzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Menu Délice Rouge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Notre Menu</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 drop-shadow-md">
              Découvrez notre sélection de produits frais et de spécialités artisanales, 
              préparés avec passion pour satisfaire tous vos goûts.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white shadow-sm"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Navigation - Improved Mobile Layout */}
      <div className="mb-12">
        {/* Desktop: Flex wrap center */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                getColorClasses(category.color, activeCategory === category.id)
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="sm:hidden">
          <div className="flex gap-3 overflow-x-auto pb-4 px-4 -mx-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap ${
                  getColorClasses(category.color, activeCategory === category.id)
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {filteredItems.length > 0 
              ? `${filteredItems.length} résultat${filteredItems.length > 1 ? 's' : ''} trouvé${filteredItems.length > 1 ? 's' : ''} pour "${searchTerm}"`
              : `Aucun résultat trouvé pour "${searchTerm}"`
            }
          </p>
        </div>
      )}

      {/* Menu Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image Thumbnail */}
            <div className="relative h-48 w-full">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-red-600 ml-2 shrink-0">
                  {item.price}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  activeCategory === 'boucherie' ? 'bg-red-100 text-red-700' :
                  activeCategory === 'epicerie' ? 'bg-green-100 text-green-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {categories.find(c => c.id === activeCategory)?.name}
                </span>
                
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offers */}
      <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Offres Spéciales</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🎉 Menu du Midi</h3>
            <p className="mb-2">Plat + Boisson + Dessert</p>
            <span className="text-2xl font-bold text-yellow-300">4.500 FCFA</span>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">🛒 Panier Famille</h3>
            <p className="mb-2">2kg de viande de bœuf + légumes de saison</p>
            <span className="text-2xl font-bold text-yellow-300">12.000 FCFA</span>
          </div>
        </div>
        <p className="mt-6 text-lg">
          Offres valables du lundi au vendredi, jusqu'à épuisement des stocks
        </p>
      </div>

      {/* Contact for Orders */}
      <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Commandez dès maintenant</h2>
        <p className="text-gray-600 mb-6">
          Passez votre commande par téléphone ou WhatsApp pour une préparation rapide
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+24206123456"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <span>📞</span>
            <span>+242 06 123 45 67</span>
          </a>
          <a
            href="https://wa.me/24206123456"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
          >
            <span>📱</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}