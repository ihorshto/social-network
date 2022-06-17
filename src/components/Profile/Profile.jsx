import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost} 
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    );
}

export default Profile;