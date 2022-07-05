import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/avatar-2.jpg';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p ? s.selectedPage : ""}
            onClick={(e) => { props.onPageChanged(p); }} >{p}</span>
        }
        )}
      </div>

      {props.users.map(u => <div key={u.id}>
        <div className={s.userItem}  key={u.id}>
          <div className={s.userInfo}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto} alt="user"/>
              </NavLink>
            </div>
            <div className={s.buttons}>
              {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                  className={s.unfollow} onClick={() => {
                    props.unfollow(u.id);
                  }}>Unfollow</button>

                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                  className={s.follow} onClick={() => {
                    props.follow(u.id);
                  }}>Follow</button>}
            </div>
          </div>
          <div className={s.userDescription}>
            <span className={s.userDescriptionLeft}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div> */}
            </span>
          </div>
        </div>
      </div>)}

    </div>
  )
}

export default Users    