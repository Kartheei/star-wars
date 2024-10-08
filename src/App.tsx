import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils";
import "./App.css";
import { Home, FilmDetails } from "./film";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.scss";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films/:id" element={<FilmDetails />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;