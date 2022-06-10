import s from './Profile.module.css';

const Profile = () => {
 return (
     <div className='content'>
      <div>
         < img src = 'https://images-na.ssl-images-amazon.com/images/I/61+oIVFF7FL.png' / >
      </div>
      <div>
        ava + descr
      </div>
      <div>
        My posts
        <div>
          New posts
        </div>
        <div className={s.posts}> 
          Posts
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
     </div>
 );
}

export default Profile;