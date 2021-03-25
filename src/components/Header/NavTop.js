import React from 'react';
import { Link } from 'react-router-dom';

import { BiHomeHeart, BiPlus } from 'react-icons/bi';
import { FaHiking } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';

const NavTop = () => (
  <nav className="header_nav">
    <Link to="/" className="header_nav_item"><BiHomeHeart size={25} />Accueil</Link>
    <Link to="/créer_une_randonnée" className="header_nav_item"><FaHiking size={25} /><BiPlus size={25} />Créer une randonnée</Link>
    <Link to="/profile" className="header_nav_item"><IoMdPerson size={25} />Mon Compte</Link>
    <Link to="/déconnexion" className="header_nav_item"><IoMdPerson size={25} />Déconnexion</Link>
  </nav>
);

export default NavTop;
