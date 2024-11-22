// src/Comptes.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COMPTES = gql`
  query {
    allComptes {
      id
      solde
      dateCreation
      type
    }
  }
`;

const Comptes = () => {
  const { loading, error, data } = useQuery(GET_COMPTES);

  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;
  if (error) return null; // On supprime l'affichage de l'erreur

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Liste des Comptes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.allComptes.map((compte) => (
          <div
            key={compte.id}
            className="bg-white shadow-xl rounded-lg p-6 border border-gray-200 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{compte.type}</h3>
            <p className="text-gray-700">Solde: <span className="font-bold">{compte.solde} €</span></p>
            <p className="text-gray-500">Date de création: {compte.dateCreation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comptes;
