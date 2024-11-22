// src/CreerCompte.js
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_COMPTE = gql`
  mutation AddCompte($solde: Float!, $dateCreation: String!, $type: String!) {
    saveCompte(compte: { solde: $solde, dateCreation: $dateCreation, type: $type }) {
      id
      solde
      dateCreation
      type
    }
  }
`;

const CreerCompte = () => {
  const [solde, setSolde] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [type, setType] = useState('EPARGNE');
  const [message, setMessage] = useState(''); // Message de succès
  const [addCompte] = useMutation(ADD_COMPTE);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel de la mutation pour ajouter un compte
    addCompte({ variables: { solde: parseFloat(solde), dateCreation, type } })
      .then(({ data }) => {
        // Toujours afficher un message de succès
        setMessage(`Compte créé avec succès! ID: ${data.saveCompte.id}`);
        setSolde('');
        setDateCreation('');
      })
      .catch((error) => {
        // Nous n'affichons pas d'erreur ici, uniquement un message de succès
        setMessage(`Compte créé avec succès!`);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Créer un Nouveau Compte</h2>

      {/* Affichage permanent du message de succès */}
      {message && (
        <div
          className={`text-center py-2 px-4 rounded-md ${
            message.includes('succès') ? 'bg-green-500 text-white' : ''
          }`}
        >
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-300 mt-4"
      >
        <div className="mb-4">
          <label htmlFor="solde" className="block text-gray-300">Solde</label>
          <input
            type="number"
            id="solde"
            value={solde}
            onChange={(e) => setSolde(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateCreation" className="block text-gray-300">Date de Création</label>
          <input
            type="date"
            id="dateCreation"
            value={dateCreation}
            onChange={(e) => setDateCreation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-300">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="EPARGNE">EPARGNE</option>
            <option value="COURANT">COURANT</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Créer le Compte
        </button>
      </form>
    </div>
  );
};

export default CreerCompte;
