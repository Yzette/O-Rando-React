import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="footer_link">
      <a href="" className="footer_instructions_link">Fonctionnement du site</a>
      <Link to="/about_us" className="footer_informations_link">
        Qui sommes-nous
      </Link>
      <a href="" className="footer_contact_link">Contact</a>
    </div>
  </footer>
);

export default Footer;
