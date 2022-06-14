import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {



  let dialogsElements = props.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messages.map( m => <Message message={m.message} />)

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>
        <div className={s.messages}>
          { messagesElements }
        </div>
      </div>
    </div>
  )
}

export default Dialogs;