import React from 'react';
import { addMessageCreator, updateNewTextMessageCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage;
          
          let AddMessage = () => {
            store.dispatch(addMessageCreator());
          }
          let onChangeMessage = (NewMessageBody) => {
            store.dispatch(updateNewTextMessageCreator(NewMessageBody))
          }

          return <Dialogs addMessageCreator={AddMessage} updateNewTextMessageCreator={onChangeMessage} dialogsPage={state} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;