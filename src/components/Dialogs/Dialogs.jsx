import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Ihor" },
    { id: 2, name: "Zenuk" },
    { id: 3, name: "Tolik" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Olga" }
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo IT komasutra" },
    { id: 3, message: "Nice stuff" }
  ];


  let dialogsElements = dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messages.map( m => <Message message={m.message} />)

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