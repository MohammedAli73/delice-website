import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl shadow-xl">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bienvenue chez <span className="text-yellow-300">Délice Rouge</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Votre destination gourmande pour des produits frais de qualité exceptionnelle
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">
              🥩 Boucherie Artisanale
            </span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">
              🛒 Épicerie Fine
            </span>
            <span className="bg-white/20 px-6 py-3 rounded-full text-lg font-semibold">
              🥪 Snack Savoureux
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez tout ce que Délice Rouge a à vous offrir
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Boucherie */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736517884171-a981a34e78a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXRjaGVyJTIwc2hvcCUyMGNsZWFuJTIwbW9kZXJufGVufDF8fHx8MTc1ODgxNDg5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Boucherie Délice Rouge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-900/30 flex items-center justify-center">
                <span className="text-6xl text-white drop-shadow-lg">🥩</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Boucherie</h3>
              <p className="text-gray-600 mb-4">
                Viandes fraîches sélectionnées avec soin, découpées par nos bouchers experts.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Bœuf de qualité premium</li>
                <li>• Porc et agneau frais</li>
                <li>• Volailles fermières locales</li>
                <li>• Charcuterie et saucissons</li>
              </ul>
            </div>
          </div>

          {/* Épicerie */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714224247661-ee250f55a842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc3RvcmUlMjBmcmVzaCUyMHByb2R1Y2V8ZW58MXx8fHwxNzU4ODEzMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Épicerie Délice Rouge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-900/30 flex items-center justify-center">
                <span className="text-6xl text-white drop-shadow-lg">🛒</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Épicerie</h3>
              <p className="text-gray-600 mb-4">
                Produits du quotidien et spécialités locales pour votre cuisine.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fruits et légumes frais</li>
                <li>• Riz, huiles et céréales</li>
                <li>• Épices et condiments</li>
                <li>• Produits importés de qualité</li>
              </ul>
            </div>
          </div>

          {/* Snack */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1708915965975-2a950db0e215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGNsZWFuJTIwbW9kZXJufGVufDF8fHx8MTc1ODgxNDkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant Délice Rouge"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-900/30 flex items-center justify-center">
                <span className="text-6xl text-white drop-shadow-lg">🥪</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Snack</h3>
              <p className="text-gray-600 mb-4">
                Plats préparés et snacks pour vos pauses gourmandes.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sandwichs artisanaux</li>
                <li>• Salades fraîches</li>
                <li>• Plats du jour</li>
                <li>• Boissons et desserts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white rounded-2xl shadow-lg">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-4">
                Depuis plus de 15 ans, Délice Rouge est votre partenaire de confiance pour 
                des produits alimentaires de qualité exceptionnelle à Brazzaville. Notre passion pour 
                l'excellence et notre engagement envers nos clients font de nous une 
                référence dans la capitale congolaise.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nous sélectionnons soigneusement nos fournisseurs locaux et importateurs pour vous offrir 
                le meilleur des produits frais, tout en maintenant des prix justes et accessibles à toutes les familles.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-red-600">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">Qualité garantie</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">Produits frais</span>
                </div>
                <div className="flex items-center space-x-2 text-red-600">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold">Service personnalisé</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-red-100 to-red-200 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717065165653-bb853b7e6e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25nbyUyMGJyYXp6YXZpbGxlJTIwY2l0eSUyMG1hcmtldHxlbnwxfHx8fDE3NTg4MTQyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marché de Brazzaville"
                  className="w-full h-64 object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-800/70 to-red-900/70 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-8xl mb-4 block">🏪</span>
                  <h3 className="text-2xl font-bold text-white mb-2">15+ Ans</h3>
                  <p className="text-red-100">d'expérience à Brazzaville</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 text-center">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nous Contacter</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">📍</span>
              <h3 className="font-bold text-gray-800 mb-2">Adresse</h3>
              <p className="text-gray-600">Avenue des Trois Martyrs<br />Brazzaville, République du Congo</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">📞</span>
              <h3 className="font-bold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-600">+242 06 123 45 67</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">🕒</span>
              <h3 className="font-bold text-gray-800 mb-2">Horaires</h3>
              <p className="text-gray-600">Lun-Sam: 7h-19h<br />Dim: 8h-14h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}