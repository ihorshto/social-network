import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessageCreator, updateNewTextMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessageCreator: () => {
      dispatch(addMessageCreator());
    },
    updateNewTextMessageCreator: (NewMessageBody) => {
      dispatch(updateNewTextMessageCreator(NewMessageBody));
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;