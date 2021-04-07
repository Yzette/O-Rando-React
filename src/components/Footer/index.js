  
import React from 'react';
import { Link } from 'react-router-dom';
import leaf from 'src/assets/icones/leaf.svg';
import mushrooms from 'src/assets/icones/mushrooms.svg';
// preparation to use Link in the next step
// import { Link } from 'react-router-dom';
/*
<Link
    to={}
    className="footer-instructions-link"
    >
      Fonctionnement du site
</Link>
*/

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer_icon_left">
      <img className="icon_left" src={leaf} alt="icone" />
    </div>
    <div className="footer_link">
      <a href="" className="footer_instructions_link">Fonctionnement</a>
      <Link to="/about_us" className="footer_informations_link">
        Qui sommes-nous
      </Link>
      <a href="" className="footer_contact_link">Contact</a>
    </div>
    <div className="footer_icon_right">
      <img className="icon_right" src={mushrooms} alt="icone" />
    </div>
  </footer>
);

export default Footer;
