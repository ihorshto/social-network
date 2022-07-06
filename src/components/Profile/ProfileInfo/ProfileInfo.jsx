import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div className={s.descriptionContainer}>
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
			<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
		</div>
	)
}

export default ProfileInfo;