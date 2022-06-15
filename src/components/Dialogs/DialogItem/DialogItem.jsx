import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
 let path = "/dialogs/" + props.id;

 return (
  <div className={s.dialog + ' ' + s.active}>
   <NavLink to={path} className={s.dialogItemLink}>
    <img src='https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-a4311f8.jpg' />
    {props.name}
    </NavLink>
  </div>
 );  
}


export default DialogItem;