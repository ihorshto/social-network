import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
 return (
  <div>
   <div className={s.content__img}>
    <img src='https://images-na.ssl-images-amazon.com/images/I/61+oIVFF7FL.png' />
   </div>
   <div className={s.descriptionBlock}>
    ava + descr
   </div>
  </div>
 )
}

export default ProfileInfo;