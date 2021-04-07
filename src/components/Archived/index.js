import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import ArchivedSmall from 'src/containers/Archived/ArchivedSmall';
import './archived.scss';

const Archived = ({ user, loadingUser }) => (
  <>
    {loadingUser && <div><Loader /></div>}
    {!loadingUser && (
      <div className="archived">
        <h2 className="archived_title">{user.archivedWalks.length} randonnée(s) passée(s)</h2>
        <div className="archived_infos_list">
          {user.archivedWalks.map((item) => (
            <ArchivedSmall key={item.walk.id} {...item.walk} />
          ))}
        </div>
      </div>
    )};
  </>
);

Archived.propTypes = {
  user: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default Archived;
