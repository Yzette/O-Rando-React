// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Home from 'src/containers/Home';
import MobileNav from 'src/components/MobileNav';
import Footer from 'src/components/Footer';

import Profile from 'src/containers/Profile';

import './styles.scss';


// == Composant
const App = ({ loadWalksFromApi, loadUserFromApi, loading }) => {
  useEffect(() => {
    loadWalksFromApi();
    loadUserFromApi();
  }, []);

  return (
    <div className="app">
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
        <>
          <Header />
          <Profile />
          <Footer />
          <MobileNav />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  // fonction qui permet de charger les recettes
  // pas de paramètre
  loadWalksFromApi: PropTypes.func.isRequired,
  loadUserFromApi: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// == Export
export default App;
