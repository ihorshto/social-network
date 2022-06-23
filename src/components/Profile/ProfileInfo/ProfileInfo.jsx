import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

if(!props.profile){
 return <Preloader/>
}

 return (
  <div>
   <div className={s.content__img}>
    <img src='https://images-na.ssl-images-amazon.com/images/I/61+oIVFF7FL.png' />
   </div>
   <div className={s.descriptionBlock}>
    <div>
     <img src={props.profile.photos.large} alt="" />
    </div>
    {props.profile.fullName}
   </div>
  </div>
 )
}

export default ProfileInfo;