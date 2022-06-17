import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageCreator, updateNewTextMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
 
  let newTextMessage = props.state.newTextMessage;

  let AddMessage = () => {
    props.dispatch(addMessageCreator());
  }

  let onChangeMessage = (e) => {
    let NewMessageBody = e.target.value;
    props.dispatch(updateNewTextMessageCreator(NewMessageBody))
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>  
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <textarea onChange={onChangeMessage}
              value={newTextMessage} placeholder="Enter text"/>
          </div>
          <div>
            <button onClick={AddMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;