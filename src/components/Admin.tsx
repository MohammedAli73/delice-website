import React, { useState } from 'react';

interface AdminData {
  menuItems: number;
  reviews: number;
  orders: number;
  revenue: string;
}

interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success';
  message: string;
  time: string;
}

export function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');

  const adminData: AdminData = {
    menuItems: 12,
    reviews: 6,
    orders: 45,
    revenue: '2,340€'
  };

  const notifications: Notification[] = [
    {
      id: '1',
      type: 'success',
      message: 'Nouvel avis client publié (5 étoiles)',
      time: '14:30'
    },
    {
      id: '2',
      type: 'info',
      message: 'Commande en attente de préparation',
      time: '13:45'
    },
    {
      id: '3',
      type: 'warning',
      message: 'Stock faible: Côte de bœuf premium',
      time: '12:20'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication (in real app, use proper authentication)
    if (credentials.username === 'admin' && credentials.password === 'delice2024') {
      setIsLoggedIn(true);
    } else {
      alert('Identifiants incorrects');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: '', password: '' });
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Administration</h1>
            <p className="text-gray-600">Connectez-vous pour accéder au tableau de bord</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nom d'utilisateur</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mot de passe</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="delice2024"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Démo:</strong><br />
              Utilisateur: <code className="bg-gray-200 px-1 rounded">admin</code><br />
              Mot de passe: <code className="bg-gray-200 px-1 rounded">delice2024</code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
            <p className="text-gray-600">Gestion de Délice Rouge</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex space-x-4 mb-8">
        {[
          { id: 'dashboard', label: 'Tableau de bord', icon: '📊' },
          { id: 'menu', label: 'Gestion Menu', icon: '📋' },
          { id: 'reviews', label: 'Avis Clients', icon: '⭐' },
          { id: 'orders', label: 'Commandes', icon: '🛒' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-red-50 shadow'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Dashboard Content */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Articles Menu</p>
                  <p className="text-3xl font-bold">{adminData.menuItems}</p>
                </div>
                <span className="text-4xl">📋</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Avis Clients</p>
                  <p className="text-3xl font-bold">{adminData.reviews}</p>
                </div>
                <span className="text-4xl">⭐</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Commandes</p>
                  <p className="text-3xl font-bold">{adminData.orders}</p>
                </div>
                <span className="text-4xl">🛒</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Chiffre d'affaires</p>
                  <p className="text-3xl font-bold">{adminData.revenue}</p>
                </div>
                <span className="text-4xl">💰</span>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications Récentes</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
                    notification.type === 'success' ? 'bg-green-50 border-green-500' :
                    notification.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">
                      {notification.type === 'success' ? '✅' :
                       notification.type === 'warning' ? '⚠️' : 'ℹ️'}
                    </span>
                    <span className="text-gray-800">{notification.message}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{notification.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Menu Management */}
      {activeTab === 'menu' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestion du Menu</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-semibold">Côte de Bœuf Premium</h3>
                <p className="text-gray-600">28,90€/kg - Boucherie</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium">
                  Modifier
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">
                  Supprimer
                </button>
              </div>
            </div>
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold">
              + Ajouter un nouvel article
            </button>
          </div>
        </div>
      )}

      {/* Reviews Management */}
      {activeTab === 'reviews' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestion des Avis</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-semibold">Marie Dubois - 5 ⭐</h3>
                <p className="text-gray-600">Excellente qualité ! La viande est toujours fraîche...</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium">
                  Approuver
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium">
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Orders Management */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestion des Commandes</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-semibold">Commande #001 - Pierre Martin</h3>
                <p className="text-gray-600">Sandwich Délice Rouge x2, Salade César x1</p>
                <span className="text-sm text-blue-600 font-medium">En préparation</span>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium">
                  Prête
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-medium">
                  Reporter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}