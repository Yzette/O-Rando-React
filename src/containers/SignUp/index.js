import { connect } from 'react-redux';

import SignUp from 'src/components/SignUp';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.userInfo.isLogged,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
