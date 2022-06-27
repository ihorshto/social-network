import { connect } from 'react-redux';
import { addMessageCreator, updateNewTextMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;