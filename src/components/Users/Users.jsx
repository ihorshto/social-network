import React from 'react'
import s from './Users.module.css';

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {id: 1,
        photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
        followed: false, fullName: "Ihor", status: "I am a man", location: { city: 'Ternopil', country: "Ukraine" }
      },
      {id: 2,
        photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
        followed: true, fullName: "Viktor", status: "I am a boss", location: { city: 'Kyiv', country: "Ukraine" }
      },
      {id: 3,
        photoUrl: 'https://media.istockphoto.com/photos/hologram-human-head-deep-learning-and-artificial-intelligence-picture-id1364105164?b=1&k=20&m=1364105164&s=170667a&w=0&h=0Ehy6gPN70RTirKZ3TP3I0zoQz3bEFpzfSWfi0MhYd8=',
        followed: false, fullName: "Vlad", status: "I am a cool dude", location: { city: 'Lviv', country: "Ukraine" }
      }
    ])
  }
  console.log(props.users);
 return (
  <div>
   { props.users.map(u => <div key={u.id}>
    <span>
      <div>
       <img className={s.photo} src={u.photoUrl} />
       </div>
      <div>
       {u.followed 
       ? <button onClick={() => { props.unfollow(u.id)}}>Follow</button> 
       : <button onClick={ () => {props.follow(u.id)}}>Unfollow</button>}
      </div>
    </span>
    <span>
     <span>
      <div>{u.fullName}</div>
      <div>{u.status}</div>
     </span>
     <span>
      <div>{u.location.country}</div>
      <div>{u.location.city}</div>
     </span>
    </span>

   </div>) }
  </div>
 )
}

export default Users; 