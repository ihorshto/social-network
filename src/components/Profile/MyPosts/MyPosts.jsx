import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


 let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

 return (
  <div className={s.postsBlock}>
   My posts
   <div>
    <div>
     <textarea cols="30" rows="5"></textarea>
    </div>
    <div>
     <button>Add post</button>
    </div>
   </div>
   <div className={s.posts}>
    {postsElements}
   </div>
  </div>
 );
} 
 
export default MyPosts;