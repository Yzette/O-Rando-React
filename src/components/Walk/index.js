import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import './walk.scss';

const Walk = ({ walks }) => {
  console.log('voici nos hikes: ', walks);

  // L'id est un paramètre de l'URL
  const { id } = useParams();

  // temporaire
  const walk = walks.find((item) => item.id == id);
  console.log(walk.title);

  //! La fonction getWalkById est plus propre à afficher ici
  //! Mais il faudra créer un loader qui s'affichera si un utilisateur va sur une page comme celle-ci
  //! Le loader va se poser en parallèle de la requête API qui va récupérer toutes les walks
  //! Une fois la requête effectuée et les walks récupérées, le loader disparait
  //! Et la page peut donc s'afficher correctement

  return (

    <article className="page">
      <h2 className="page-title">{walk.title}</h2>
      <p>Point de départ : {walk.startingPoint}</p>
      <p>Point d'arriver : {walk.endPoint}</p>
      <p>Date : {walk.date}</p>
      <p>Difficulté : {walk.difficulty}</p>
      <p>Durée : {walk.duration}</p>
      <p>Dénivelée : {walk.elevation}</p>
      <p>Nombre de personnes max : {walk.maxNbPersons}</p>
      <p>Lieux : {walk.area.name}</p>
      <div className="description">
        <p className="post-page"> {walk.description}</p>
        <div className="page-links">
          <a className="link" href="#">Link</a>
          <button className="button-page" type="button">Participer</button>
        </div>
      </div>
    </article>
  );
};

Walk.propTypes = {
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      elevation: PropTypes.number.isRequired,
      maxNbPersons: PropTypes.number.isRequired,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,

    }).isRequired,
  ).isRequired,
};

export default Walk;

/*
<div>
      <button className="button-comment" type="button">Laisser un avis</button>
    </div>
    <div className="comment">
      <span className="comment-icons">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        Organisation
      </span>
      <span className="comment-icons">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarOutline />
      <IoIosStarOutline />
      Convivialité
      </span>
      <span className="comment-icons">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
        Randonnée
      </span>
    </div>
    <div>
      <p className="post-comment">Laisser un commentaire :</p>
      <div className="write-comment">
      </div>
    </div>
    */
