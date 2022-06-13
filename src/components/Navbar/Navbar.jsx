import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={`${s.item} ${s.active}`}>
          <a href="/profile">Profile</a>
        </li>
        <li className={s.item}>
          <a href='/dialogs' >Messages</a>
        </li>
        <li className={s.item}>
          <a href='/news' >News</a>
        </li>
        <li className={s.item}>
          <a href='music' >Music</a>
        </li>
        <li className={s.item}>
          <a href='settings' >Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;