import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 return (
  <div>
   My posts
   <div>
    <textarea cols="30" rows="5"></textarea>
    <button></button>
   </div>
   <div className={s.posts}>
    <Post message="Hi! What's is your name?" likesCount="4"/>
    <Post message="Hello my name is Ihor!" likesCount="1" />
    <Post message="What's up man?" likesCount="2" />
    <Post message="Yeahhh goood!!!" likesCount="7" />
   </div>
  </div>
 );
}

export default MyPosts;