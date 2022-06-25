import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../images/avatar-2.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
        <div className={s.userItem}>
          <div className={s.userInfo}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto} />
              </NavLink>
            </div>
            <div className={s.buttons}>
              {u.followed
                ? <button className={s.follow} onClick={() => {

                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "136cda55-4975-44f8-a8df-7262ef382550"
                    }
                  }).then(response => {
                    if(response.data.resultCode === 0) {
                      props.unfollow(u.id)
                    }
                  });
                  
                  }}>Follow</button>
                : <button className={s.unfollow} onClick={() => { 
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { 
                    withCredentials: true,
                    headers: {
                      "API-KEY": "136cda55-4975-44f8-a8df-7262ef382550"
                    } 
                  }).then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(u.id) 
                    }
                  });
                 
                  
                  }}>Unfollow</button>}
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