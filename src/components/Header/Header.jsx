import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (

		<header className={s.header}>
			<img src="https://brandlogos.net/wp-content/uploads/2013/07/apple-mac-vector-logo-400x400.png" />

			<div className={s.loginBlock}>
				<div className={s.loginBlockText}>
					{props.isAuth 
						? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  
						: <NavLink to={'/login'}>Login</NavLink>}
				</div>
				<div className={s.loginBlockPhoto}>
					{props.isAuth ? <img src={props.userPhoto} /> : ""}
				</div>
			</div>
		</header>
	);
}

export default Header;