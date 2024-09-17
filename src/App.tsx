import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from "./api";
import './App.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Star Wars Films</h1>
        </header>
      </div>
    </ApolloProvider>

  );
}

export default App;