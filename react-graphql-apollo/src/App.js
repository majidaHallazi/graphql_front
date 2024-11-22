// src/App.js
import React, { useState } from 'react';
import Comptes from './Comptes';
import CreerCompte from './CreerCompte';
import Transactions from './Transactions';

function App() {
  // États pour contrôler l'affichage des transactions et des comptes
  const [showComptes, setShowComptes] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  // Fonction pour afficher les Comptes
  const handleComptesClick = () => {
    setShowComptes(true);
    setShowTransactions(false); // Masquer les transactions
  };

  // Fonction pour afficher les Transactions
  const handleTransactionsClick = () => {
    setShowTransactions(true);
    setShowComptes(false); // Masquer les comptes
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://img.freepik.com/photos-gratuite/elements-vente-evenement-cyber-lundi-plat-laics-fond-noir_23-2148675055.jpg?semt=ais_hybrid)',
      }} // Image de fond
    >
      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-60">
        <div className="text-center text-white w-full px-4 py-6">
          <h1 className="text-4xl font-extrabold mb-6">Gestion des Comptes et Transactions</h1>

          {/* Boutons Stylisés */}
          <div className="space-x-4 mb-6">
            <button
              onClick={handleComptesClick}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Voir les Comptes
            </button>
            <button
              onClick={handleTransactionsClick}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Voir les Transactions
            </button>
          </div>

          {/* Affichage des Comptes ou des Transactions */}
          {showComptes && <Comptes />}
          {showTransactions && <Transactions />}
        </div>
      </div>
    </div>
  );
}

export default App;
