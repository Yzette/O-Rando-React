import { connect } from 'react-redux';

// on importe le composant de présentation
import CreateWalk from 'src/components/CreateWalk';

import { updateCreateWalkField, updateCreateWalkSelect } from 'src/actions/walks';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  areas: state.areasList.areas,
  tags: state.tagsList.tags,
  walkTitle: state.walksList.walkTitle,
  walkStartingPoint: state.walksList.walkStartingPoint,
  walkEndPoint: state.walksList.walkEndPoint,
  walkDate: state.walksList.walkDate,
  walkDuration: state.walksList.walkDuration,
  walkDistance: state.walksList.walkDistance,
  walkElevation: state.walksList.walkElevation,
  walkNumberPeople: state.walksList.walkNumberPeople,
  walkDescription: state.walksList.walkDescription,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  updateCreateWalkField: (identifier, newValue) => {
    const action = updateCreateWalkField(identifier, newValue);
    dispatch(action);
  },
  updateCreateWalkSelect: (identifier, newValue) => {
    const action = updateCreateWalkSelect(identifier, newValue);
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(CreateWalk);
