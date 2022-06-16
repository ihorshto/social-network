import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />)

  let newMessage = React.createRef();

  let AddMessage = () => {
    props.addMessage();
  }

  let onChangeMessage = () => {
    let message = newMessage.current.value;
    props.updateNewTextMessage(message);
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>  
        <div className={s.messages}>
          { messagesElements }
          <div>
            <textarea onChange={onChangeMessage} ref={newMessage} 
              value={props.newTextMessage}/>
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