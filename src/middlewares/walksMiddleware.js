import axios from 'axios';
import {
  FETCH_WALKS,
  DELETE_WALK,
  saveWalks,
  fetchWalks,
  saveCreatedWalk,
  PARTIPATE_WALK,
  CANCEL_PARTICIPATE,
  CREATE_WALK,
  EDIT_WALK,
} from 'src/actions/walks';
import { saveUserAuth, saveUser } from 'src/actions/users';

const walksMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans walkMiddleware: ', action);
  switch (action.type) {
    case FETCH_WALKS: {
      // console.log('il faut récupérer les randonnées');
      const authenticationToken = localStorage.getItem('Token');
      axios.get('https://orando.me/o/api/walks', { headers: { Authorization: `Bearer ${authenticationToken}` } })

        .then((response) => {
          // console.log(response.data);
          if (response.status === 401) {
            localStorage.clear();
            store.dispatch(saveUserAuth(false));
          }
          store.dispatch(saveWalks(response.data));
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case DELETE_WALK: {
      // console.log('il faut effacer une randonnée');

      const authenticationToken = localStorage.getItem('Token');
      axios.delete(`https://orando.me/o/api/walks/${action.walkId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })

        .then((response) => {
          // const walkId = response.data.id;
          // console.log(response);
          // const walks2 = store.getState().walksList.walks;
          // console.log(typeof walks2);
          // console.log('tableau des randos', walks2);
          if (response.status === 200) {
            alert('Votre randonnée a bien été supprimée !');
            const currentUserId = localStorage.getItem('currentUserId');
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((error) => {
          console.log('error: ', error);
        });
      next(action);
      break;
    }
    case PARTIPATE_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      // console.log(action.walkId);
      axios.post('https://orando.me/o/api/participant', {
        user: currentUserId,
        walk: action.walkId,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          console.log('toto aime le chocolat', response);
          if (response.status === 201) {
            alert(response.data.message);
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
        })
        .catch((error) => {
          console.log(`error: ${error.response.data.message}`);
          alert('Votre participation a déjà été prise en compte');
        });
    
      next(action);
      break;
    }
    case CANCEL_PARTICIPATE: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      axios.patch('https://orando.me/o/api/participant', {
        user: currentUserId,
        walk: action.walkId,
        requestStatus: 2,
      }, {
        headers: {
          Authorization: `Bearer ${authenticationToken}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            alert(response.data.message);
            axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
              .then((response) => {
                store.dispatch(saveUser(response.data));
              })
              .catch((error) => {
                console.log('error: ', error);
              });
          }
          console.log('toto aimerait sa', response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case CREATE_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');

      const {
        walkTitle,
        walkAreaId,
        walkTags,
        walkStartingPoint,
        walkEndPoint,
        walkDate,
        walkDuration,
        walkDescription,
        walkDistance,
        walkDifficulty,
        walkElevation,
        walkNumberPeople,
        walkTagsToUpdate,
      } = store.getState().walksList;

      const tagsForNewWalk = walkTagsToUpdate.filter((tags) => tags.checked).map((tags) => tags.id);

      console.log(tagsForNewWalk);

      if (
        walkTitle
        && walkAreaId
        && walkStartingPoint
        && walkDate
        && walkDuration
        && walkDescription
        && walkDifficulty) {
        axios.post('https://orando.me/o/api/walks', {
          title: walkTitle,
          area: walkAreaId,
          creator: currentUserId,
          tags: tagsForNewWalk,
          startingPoint: walkStartingPoint,
          endPoint: walkEndPoint,
          date: walkDate,
          duration: walkDuration,
          description: walkDescription,
          kilometre: Number(walkDistance),
          difficulty: walkDifficulty,
          elevation: Number(walkElevation),
          maxNbPersons: Number(walkNumberPeople),
        }, {
          headers: {
            Authorization: `Bearer ${authenticationToken}`,
          },
        })
          .then((response) => {
            // console.log('réponse après envoi pour création', response);
            if (response.status === 201) {
              alert('Votre randonnée a été créée avec succès !');
              axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
                .then((response) => {
                  store.dispatch(saveUser(response.data));
                  store.dispatch(fetchWalks());
                  // store.dispatch(saveCreatedWalk(true));
                })
                .catch((error) => {
                  console.log('error: ', error);
                });
            }
          })
          .catch((error) => {
            console.log('error: ', error);
          }); // end of AXIOS request
      } // end of if
      else {
        alert('Veuillez saisir tous les champs obligatoires avant de valider');
      }
      next(action);
      break;
    }

    case EDIT_WALK: {
      const authenticationToken = localStorage.getItem('Token');
      const currentUserId = localStorage.getItem('currentUserId');
      console.log('il faut modifier une randonnée', action.walkId);

      const {
        walkTitle,
        walkAreaId,
        // walkTags,
        walkStartingPoint,
        walkEndPoint,
        walkDate,
        walkDuration,
        walkDescription,
        walkDistance,
        walkDifficulty,
        walkElevation,
        walkNumberPeople,
        walkTagsToUpdate,
      } = store.getState().walksList;

      // console.log(walkTagsToUpdate);

      const tagsToUpdate = walkTagsToUpdate.filter((tags) => tags.checked).map((tags) => tags.id);

      // console.log(tagsToUpdate);

      if (
        walkTitle
        && walkAreaId
        && walkStartingPoint
        && walkDate
        && walkDuration
        && walkDescription
        && walkDifficulty) {
        axios.patch(`https://orando.me/o/api/walks/${action.walkId}`, {
          title: walkTitle,
          area: walkAreaId,
          creator: currentUserId,
          tags: tagsToUpdate,
          startingPoint: walkStartingPoint,
          endPoint: walkEndPoint,
          date: walkDate,
          duration: walkDuration,
          description: walkDescription,
          kilometre: Number(walkDistance),
          difficulty: walkDifficulty,
          status: 1,
          elevation: Number(walkElevation),
          maxNbPersons: Number(walkNumberPeople),
        }, {
          headers: {
            Authorization: `Bearer ${authenticationToken}`,
          },
        })
          .then((response) => {
            // console.log('réponse après envoi pour modification', response);
            if (response.status === 200) {
              alert('Votre randonnée a été modifiée avec succès !');
              axios.get(`https://orando.me/o/api/users/${currentUserId}`, { headers: { Authorization: `Bearer ${authenticationToken}` } })
                .then((response) => {
                  store.dispatch(saveUser(response.data));
                  store.dispatch(fetchWalks());
                  // store.dispatch(saveCreatedWalk(true));
                })
                .catch((error) => {
                  console.log('error: ', error);
                });
            }
          })
          .catch((error) => {
            console.log('error: ', error);
          }); // end of AXIOS request
      } // end of if
      else {
        alert('Veuillez saisir tous les champs obligatoires avant de valider');
      }
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default walksMiddleware;
