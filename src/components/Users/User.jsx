import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/avatar-2.jpg';
import { NavLink } from 'react-router-dom';

let User = (props) => {
 return (
 <div>
    <div className={s.userItem} key={props.user.id}>
     <div className={s.userInfo}>
      <div>
       <NavLink to={'/profile/' + props.user.id}>
        <img className={s.photo} src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="user" />
       </NavLink>
      </div>
      <div className={s.buttons}>
       {props.user.followed
        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}
         className={s.unfollow} onClick={() => {
          props.unfollow(props.user.id);
         }}>Unfollow</button>

        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
         className={s.follow} onClick={() => {
          props.follow(props.user.id);
         }}>Follow</button>}
      </div>
     </div>
     <div className={s.userDescription}>
      <span className={s.userDescriptionLeft}>
       <div>{props.user.name}</div>
       <div>{props.user.status}</div>
      </span>
      <span>
       {/* <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div> */}
      </span>
     </div>
    </div>
   </div>
  )
 }

export default User    