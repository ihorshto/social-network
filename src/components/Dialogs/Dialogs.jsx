import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map ( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
  let newTextMessage = state.newTextMessage;

  let onAddMessage = () => {
    props.addMessageCreator();
  }

  let onChangeMessage = (e) => {
    let NewMessageBody = e.target.value;
    props.updateNewTextMessageCreator(NewMessageBody)
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
            <button onClick={onAddMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;