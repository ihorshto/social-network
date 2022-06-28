import { NavLink } from 'react-router-dom';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
   let path = "/dialogs/" + props.id;
   
   return (
      <div className={s.friendsItem}>
         <NavLink to={path} className={s.friendsItemLink}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQ7ZRfTQvI_aUtrRPhE6fXqFV7h0enzEsNQ&usqp=CAU" />
            {props.name}
         </NavLink>
      </div>
   );
}

export default FriendsItem;