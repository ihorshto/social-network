import s from './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
 let UserElements = props.friendsItem.userItems.map(u => <FriendsItem name={u.name} key={u.id} id={u.id} />);

 return (
  <div className={s.friendsWrapper}>
   <h3>Friends</h3>
   <div className={s.friendsItems}>
    {UserElements}
   </div>
  </div>
 );
}

export default Friends;