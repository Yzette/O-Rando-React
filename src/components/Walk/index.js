import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { BiBeenHere, BiDirections, BiEnvelope, BiInfoCircle } from 'react-icons/bi';
import Moment from 'react-moment';
import Loader from 'src/components/Loader';

// import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import './walk.scss';

import mountain from 'src/assets/icones/047-mountain.svg';
import retour from 'src/assets/icones/retour.svg';
import hiking from 'src/assets/icones/hiking.svg';
import clock from 'src/assets/icones/clock.svg';
import climbing from 'src/assets/icones/climbing.svg';
import twoHikes from 'src/assets/icones/two_hikes.svg';
import info from 'src/assets/icones/info.svg';

const Walk = ({ walks, loadingWalk, handleParticipation }) => {
  // console.log(walks);

  const { id } = useParams();

  const walk = walks.find((item) => item.id == id);
  const userId = localStorage.getItem('currentUserId');

  return (
    <>
      {loadingWalk && <div> <Loader /> </div> }
      {!loadingWalk && (
        <div className="walk">
          <h2 className="walk_title">{walk.title}</h2>
          <p className="walk_area">{walk.area.name}</p>
          <p className="walk_date">Le <Moment locale="fr" format="dddd DD MMMM YYYY HH:mm">{walk.date}</Moment></p>
          <div className="walk_tags_list">
            {walk.tags.map((tag) => (
              <p key={tag.name} className={`walk_tag_${tag.color}`}>{tag.name}</p>
            ))}
          </div>
          <img src={mountain} alt="clock" className="walk_starting_icon" />
          <p className="walk_starting_point"> Départ de : {walk.startingPoint}</p>
          <img src={retour} alt="clock" className="walk_endPoint_icon" />
          {walk.endPoint ? <p className="walk_end_point"> Arrivée à : {walk.endPoint}</p> : <p className="walk_end_point"> Cette randonnée est une boucle, le point d'arrivée est identique au point de départ</p>}
          <img src={climbing} alt="climbing" className="walk_difficulty_icon" />
          <p className="walk_difficulty">Difficulté : {walk.difficulty}</p>
          <img src={clock} alt="clock" className="walk_duration_icon" />
          <p className="walk_duration">Durée : {walk.duration}</p>
          <img src={hiking} alt="hiking" className="walk_elevation_icon" />
          {walk.elevation ? <p className="walk_elevation"> Dénivelé : {walk.elevation} mètres</p> : <p className="walk_elevation">Dénivelé non renseigné</p>}
          <img src={twoHikes} alt="icones_number_persons" className="walk_nbPersons_icon" />
          {walk.maxNbPersons ? <p className="walk_maxNbPersons">Nombre limite de participants : {walk.maxNbPersons}</p> : <p className="walk_maxNbPersons">Pas de limite dans le nombre de participants</p>}
          <img src={info} alt="icones_info" className="walk_description_icon" />
          <p className="walk_description"> Description / Infos pratiques : <br /> {walk.description}</p>
          <div className="walk-links">
            {walk.creator.id == userId ? (
              <a className="walk_edit_link" href={`https://orando.me/o/walk/edit/${id}`}>
                <button className="walk_button_edit" type="button">Modifier la randonnée</button>
              </a>
            ) : (
              <>
                <a className="walk_contact_link" href={`https://orando.me/o/profile/${walk.creator.id}/contact-user`}><BiEnvelope size={30} />Contacter {walk.creator.nickname} pour avoir plus d'informations !</a>
                <button className="walk_moreInfos_button" type="button" onClick={() => handleParticipation(id)}>Je souhaite participer !</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

Walk.propTypes = {
  loadingWalk: PropTypes.bool.isRequired,
  walks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startingPoint: PropTypes.string.isRequired,
      endPoint: PropTypes.string,
      date: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      elevation: PropTypes.number,
      maxNbPersons: PropTypes.number,
      area: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleParticipation: PropTypes.func.isRequired,
};

Walk.funcdefaultProps = {
  walks: [
    {
      endPoint: '',
      elevation: null,
      maxNbPersons: null,
    },
  ],
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
