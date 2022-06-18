import React from 'react';
import { addMessageCreator, updateNewTextMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let AddMessage = () => {
    props.store.dispatch(addMessageCreator());
  }

  let onChangeMessage = (NewMessageBody) => {
    props.store.dispatch(updateNewTextMessageCreator(NewMessageBody))
  }

  return <Dialogs addMessageCreator={AddMessage} updateNewTextMessageCreator={onChangeMessage} dialogsPage={state} />
}

export default DialogsContainer;