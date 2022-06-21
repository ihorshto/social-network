import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import FriendsContainer from '../Friends/FriendsContainer';
import s from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <div>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li className={s.item}>
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
          </li>
          <li className={s.item}>
            <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
          </li>
        </ul>
        <FriendsContainer/>
      </nav>
    </div>
  );
}

export default Navbar;