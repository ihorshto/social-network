import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
 return (
     <div>
      <div className={s.content__img}>
         <img src = 'https://images-na.ssl-images-amazon.com/images/I/61+oIVFF7FL.png' / >
      </div>
      <div>
        ava + descr
      </div>
     </div>
 );
}

export default Profile;