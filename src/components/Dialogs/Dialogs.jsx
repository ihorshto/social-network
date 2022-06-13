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

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name="Ihor" id="1" />
          <DialogItem name="Zenuk" id="2" />
          <DialogItem name="Tolik" id="3" />
          <DialogItem name="Masha" id="4" />
          <DialogItem name="Olga" id="5" />
        </div>
        <div className={s.messages}>
          <Message message="Hi!" />
          <Message message="Yo IT komasutra" />
          <Message message="Nice stuff" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;