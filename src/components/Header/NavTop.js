import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import homeLogo from 'src/assets/images/home.png';
import createLogo from 'src/assets/images/create.png';
import connect from 'src/assets/images/enter.png';
import disconnect from 'src/assets/images/logout.png';
import avatar from 'src/assets/images/054-hiker.png';

const NavTop = ({ handleLogout, isLogged }) => (
  <nav className="header_nav">
    <Link to="/" className="header_nav_item"><img className="header_nav_home_logo" src={homeLogo} alt="logo-orando" />Accueil</Link>
    <a href="https://orando.me/o/walk/create" className="header_nav_item"><img className="header_nav_create_logo" src={createLogo} alt="logo-create-walk" />Créer une randonnée</a>
    {!isLogged && (
      <Link to="/authentication" className="header_nav_item"><img className="header_nav_home_connect" src={connect} alt="logo-connect" />Connexion</Link>
    )}
    {isLogged && (
      <>
        <Link to="/account" className="header_nav_item"><img className="header_nav_home_avatar" src={avatar} alt="logo-avatar" />Mon Compte</Link>
        <a href="https://orando.me/o/logout" className="header_nav_item" type="submit" onClick={handleLogout}><img className="header_nav_home_disconnect" src={disconnect} alt="logo-disconnect" />Déconnexion</a>
      </>
    )}
  </nav>
);

NavTop.propTypes = {
  /** toggle between "connected" or "not connected" */
  // i change the proptype isLogged into "is required"
  // here this props is essential to display the right icon(s)
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default NavTop;
