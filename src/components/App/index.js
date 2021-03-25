// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Page from 'src/components/Page';
import MobileNav from 'src/components/MobileNav';
import Footer from 'src/components/Footer';


import './styles.scss';

// == Composant
const App = ({ loadWalksFromApi, loadUserFromApi }) => {
  useEffect(() => {
    loadWalksFromApi();
    loadUserFromApi();
  }, []);

  return (
    <div className="app">
      <Header />
      <Page />
      <Footer />
      <MobileNav />
    </div>
  );
};

App.propTypes = {
  // fonction qui permet de charger les recettes
  // pas de paramètre
  loadWalksFromApi: PropTypes.func.isRequired,
  loadUserFromApi: PropTypes.func.isRequired,
};

// == Export
export default App;
