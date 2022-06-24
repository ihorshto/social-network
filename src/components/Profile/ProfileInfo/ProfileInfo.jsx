import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	debugger;
	return (
		<div>
			<div className={s.content__img}>
				<img src='https://images-na.ssl-images-amazon.com/images/I/61+oIVFF7FL.png' />
			</div>
			<div className={s.descriptionBlock}>
				<div className={s.descriptionPhoto}>
					<img src={props.profile.photos.large} alt="" />
				</div>
				<div className={s.descriptionInfo}>
					<div className={s.fullName}>Name:
						<span>{props.profile.fullName}</span>
					</div>
					<div className={s.aboutInfo}>About me:
						<span>{props.profile.aboutMe}</span>
					</div>
					<div className={s.lookingJobDescr}>Looking  for a job:
						<span>{props.profile.lookingForAJobDescription}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;