import React, { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Navigation } from './components/Navigation';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // SEO meta tags management
  useEffect(() => {
    const titles = {
      home: 'Délice Rouge - Boucherie, Épicerie & Snack',
      menu: 'Notre Menu - Délice Rouge',
      reviews: 'Avis Clients - Délice Rouge'
    };

    const descriptions = {
      home: 'Délice Rouge, votre boucherie, épicerie et snack de qualité. Découvrez nos produits frais et savoureux.',
      menu: 'Découvrez notre menu avec des produits frais de boucherie, épicerie fine et snacks savoureux.',
      reviews: 'Consultez les avis de nos clients satisfaits et partagez votre expérience chez Délice Rouge.'
    };

    document.title = titles[currentPage as keyof typeof titles] || titles.home;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', descriptions[currentPage as keyof typeof descriptions] || descriptions.home);

    // Add Open Graph meta tags if they don't exist
    const addMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    addMetaTag('og:title', titles[currentPage as keyof typeof titles] || titles.home);
    addMetaTag('og:description', descriptions[currentPage as keyof typeof descriptions] || descriptions.home);
    addMetaTag('og:type', 'website');

  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'menu':
        return <Menu />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}