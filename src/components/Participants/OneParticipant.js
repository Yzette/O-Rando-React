import React from 'react';
import PropTypes from 'prop-types';

import avatar from 'src/assets/icones/fox.svg';

const OneParticipant = ({ id, nickname, picture }) => (
  <div className="oneParticipant">
    { picture !== null ? <img className="one_participant_image" size={50} src={`https://orando.me/o/images/users/${picture}`} alt="profile-photography" /> : <img className="one_participant_image" size={50} src={avatar} alt="avatar" />}
    <p className="one_participant_contact"><a href={`https://orando.me/o/profile/${id}/contact-user`}>Contacter {nickname}</a></p>
  </div>
);

OneParticipant.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default OneParticipant;
