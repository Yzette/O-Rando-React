import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'src/components/TextField';
import contactLogo from 'src/assets/images/email.png';

import './contactUser.scss';

const ContactUser = ({ messageUser, isSent, updateContactField }) => {
  console.log('toto');
  return (
    <main className="contactUser">
      <div className="contactUser_title">
        <img className="contactUser_contact_logo" src={contactLogo} alt="logo-create-walk" />
        <h2 className="contactUser_title_text">Contacter l'organisateur</h2>
      </div>
      <form className="contactUser_form">
        <TextField
          identifier="messageUser"
          placeholder=""
          label="Votre message"
          value={messageUser}
          required
          rows="10"
          changeField={(identifier, newValue) => {
            console.log(`changeField sur message : identifier=${identifier}, newValue=${newValue}`);
            updateContactField(identifier, newValue);
          }}
        />
        <button className="contactUser_button" type="submit">Envoyer</button>
      </form>
    </main>
  );
};

ContactUser.propTypes = {
  messageUser: PropTypes.string.isRequired,
  isSent: PropTypes.bool.isRequired,
  updateContactField: PropTypes.func.isRequired,
};
export default ContactUser;
