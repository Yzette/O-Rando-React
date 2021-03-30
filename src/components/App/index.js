// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Page from 'src/containers/Page';
import MobileNav from 'src/containers/MobileNav';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = ({ loadAreasFromApi, loadWalksFromApi, checkUserAuth }) => {
  useEffect(() => {
    loadAreasFromApi();
    loadWalksFromApi();
    checkUserAuth();
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
  loadAreasFromApi: PropTypes.func.isRequired,

  loadWalksFromApi: PropTypes.func.isRequired,
  loadUserFromApi: PropTypes.func.isRequired,
  checkUserAuth: PropTypes.func.isRequired,
};

// == Export
export default App;
