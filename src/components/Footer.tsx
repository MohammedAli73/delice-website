import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">🏪</span>
              <h3 className="text-2xl font-bold text-yellow-300">Délice Rouge</h3>
            </div>
            <p className="text-red-100 mb-4 max-w-md">
              Votre partenaire de confiance pour des produits alimentaires de qualité exceptionnelle 
              à Brazzaville depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/24206123456" 
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📱</span>
                <span>WhatsApp</span>
              </a>
              <a 
                href="tel:+24206123456" 
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Appeler</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Nos Services</h4>
            <ul className="space-y-2 text-red-100">
              <li>🥩 Boucherie Artisanale</li>
              <li>🛒 Épicerie Fine</li>
              <li>🥪 Restaurant & Snack</li>
              <li>🚚 Livraison à domicile</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-300">Contact</h4>
            <div className="space-y-3 text-red-100">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <div>
                  <p>Avenue des Trois Martyrs</p>
                  <p>Brazzaville, République du Congo</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <p>+242 06 123 45 67</p>
              </div>
              <div className="flex items-start space-x-2">
                <span>🕒</span>
                <div>
                  <p>Lun-Sam: 7h-19h</p>
                  <p>Dimanche: 8h-14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-red-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-red-200 text-sm mb-4 md:mb-0">
              © 2024 Délice Rouge. Tous droits réservés.
            </p>
            <div className="text-sm text-red-200">
              Creé par Mohamed El hadj issa
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}