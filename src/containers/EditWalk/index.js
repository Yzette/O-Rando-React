import { connect } from 'react-redux';

// on importe le composant de présentation
import EditWalk from 'src/components/EditWalk';

import { updateWalkField, updateWalkSelect, editWalk } from 'src/actions/walks';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  areas: state.areasList.areas,
  tags: state.tagsList.tags,
  walks: state.walksList.walks,
  loadingWalk: state.walksList.loadingWalk,
  walkTitle: state.walksList.walkTitle,
  walkAreaId: state.walksList.walkAreaId,
  walkTags: state.walksList.walkTags,
  walkStartingPoint: state.walksList.walkStartingPoint,
  walkEndPoint: state.walksList.walkEndPoint,
  walkDate: state.walksList.walkDate,
  walkDuration: state.walksList.walkDuration,
  walkDistance: state.walksList.walkDistance,
  walkDifficulty: state.walksList.walkDifficulty,
  walkElevation: state.walksList.walkElevation,
  walkNumberPeople: state.walksList.walkNumberPeople,
  walkDescription: state.walksList.walkDescription,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateWalkField: (identifier, newValue) => {
    const action = updateWalkField(identifier, newValue);
    dispatch(action);
  },
  updateWalkSelect: (identifier, newValue) => {
    const action = updateWalkSelect(identifier, newValue);
    dispatch(action);
  },
  handleEdit: (walkId) => {
    const action = editWalk(walkId);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(EditWalk);
