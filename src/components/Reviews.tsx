import React, { useState } from 'react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    rating: 5,
    comment: 'Excellente qualité ! La viande est toujours fraîche et le service est irréprochable. Je recommande vivement Délice Rouge pour tous vos achats alimentaires.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    name: 'Pierre Martin',
    rating: 5,
    comment: 'Depuis que j\'ai découvert ce lieu, je ne vais plus ailleurs. Les produits locaux sont d\'une qualité exceptionnelle et l\'équipe est très professionnelle.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    rating: 4,
    comment: 'Très bon choix de produits frais. Les sandwichs du snack sont délicieux ! Petit bémol sur les horaires parfois un peu restrictifs.',
    date: '2024-01-08',
    verified: false
  },
  {
    id: '4',
    name: 'Jean-Claude Moreau',
    rating: 5,
    comment: 'Boucher de confiance depuis 15 ans ! La côte de bœuf est un délice et le conseil est toujours au rendez-vous. Bravo à toute l\'équipe !',
    date: '2024-01-05',
    verified: true
  },
  {
    id: '5',
    name: 'Isabelle Roux',
    rating: 5,
    comment: 'L\'épicerie fine est fantastique. J\'y trouve tous mes produits préférés et même des découvertes. L\'huile d\'olive artisanale est un régal !',
    date: '2024-01-03',
    verified: true
  },
  {
    id: '6',
    name: 'Marc Durand',
    rating: 4,
    comment: 'Bon rapport qualité-prix. Les plats du snack sont copieux et savoureux. Service rapide et efficace.',
    date: '2024-01-01',
    verified: false
  }
];

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [showForm, setShowForm] = useState(false);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => 
    reviews.filter(review => review.rating === star).length
  );

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const review: Review = {
        id: Date.now().toString(),
        name: newReview.name,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        verified: false
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, comment: '' });
      setShowForm(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Avis Clients</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez ce que nos clients pensent de Délice Rouge. 
          Votre satisfaction est notre priorité absolue.
        </p>
      </div>

      {/* Rating Summary */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-6xl font-bold text-red-600 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center mb-2">
              {renderStars(Math.round(averageRating))}
            </div>
            <p className="text-gray-600">Basé sur {reviews.length} avis</p>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={star} className="flex items-center space-x-3">
                <span className="text-sm w-8">{star} ⭐</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${reviews.length > 0 ? (ratingDistribution[index] / reviews.length) * 100 : 0}%`
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {ratingDistribution[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Review Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200"
        >
          {showForm ? '✕ Annuler' : '✍️ Laisser un avis'}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partagez votre expérience</h2>
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Votre nom</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Entrez votre nom"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Note</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({...newReview, rating: star})}
                    className={`text-3xl transition-colors duration-200 ${
                      star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Votre commentaire</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent h-32 resize-none"
                placeholder="Partagez votre expérience chez Délice Rouge..."
                required
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Publier l'avis
            </button>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">
                    {review.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold text-gray-800">{review.name}</h3>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Vérifié
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {new Date(review.date).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez nos clients satisfaits !</h2>
        <p className="text-xl mb-6">
          Venez découvrir pourquoi Délice Rouge est la référence de la qualité dans notre région.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/20 px-6 py-3 rounded-full">
            <span className="font-bold text-lg">95% de clients satisfaits</span>
          </div>
          <div className="bg-white/20 px-6 py-3 rounded-full">
            <span className="font-bold text-lg">15+ ans à Brazzaville</span>
          </div>
          <div className="bg-white/20 px-6 py-3 rounded-full">
            <span className="font-bold text-lg">Produits 100% frais</span>
          </div>
        </div>
      </div>
    </div>
  );
}