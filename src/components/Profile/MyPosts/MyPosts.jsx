import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 let postsData = [
  { id: 1, message: "Hi! What's is your name?", likesCount: 12 },
  { id: 2, message: "Hello my name is Ihor!", likesCount: 1 },
  { id: 3, message: "What's up man?", likesCount: 46 },
  { id: 4, message: "Yeahhh goood!!!", likesCount: 57 }
 ]

 let postsElements = postsData.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

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