import s from './Message.module.css';

const Message = (props) => {
 return (
  <div className={s.message}>
   <img src="https://papik.pro/uploads/posts/2021-09/1631997549_6-papik-pro-p-krutie-avatarki-risunki-6.jpg" />
   <div className={s.messageBg}>
       {props.message}
   </div>
   </div>
 )
}

export default Message;