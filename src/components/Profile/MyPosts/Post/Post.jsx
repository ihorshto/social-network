import s from './Post.module.css';

const Post = (props) => {
 return (
  <div className={s.item}>
   <img src='https://cdn-icons-png.flaticon.com/512/194/194938.png' />
   {props.message}
   <div>
    <span>{props.likesCount} like</span>
   </div>
  </div>
 );
}

export default Post;