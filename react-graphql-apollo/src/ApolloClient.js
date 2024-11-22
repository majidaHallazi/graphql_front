// src/ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8082/graphql', // L'URL de votre serveur GraphQL
  cache: new InMemoryCache(), // Utilisation du cache en mémoire
});

// Fournir le client Apollo à toute l'application React
const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);

export { ApolloClientProvider };
