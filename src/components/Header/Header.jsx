import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<img src="https://brandlogos.net/wp-content/uploads/2013/07/apple-mac-vector-logo-400x400.png" />

			<div className={s.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;