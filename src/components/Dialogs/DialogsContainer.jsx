import { connect } from 'react-redux';
import { compose } from 'redux';
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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Dialogs);