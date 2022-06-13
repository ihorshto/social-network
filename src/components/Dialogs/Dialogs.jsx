import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <div className={s.dialog + ' ' + s.active}>Ihor</div>
          <div className={s.dialog}>Tolik</div>
          <div className={s.dialog}>Zenuk</div>
          <div className={s.dialog}>Masha</div>
          <div className={s.dialog}>Olga</div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hi</div>
          <div className={s.message}>Yo IT komasutra</div>
          <div className={s.message}>Nice stuff</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;