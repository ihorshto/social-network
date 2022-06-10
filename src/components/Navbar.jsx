

const Navbar = () => {
 return (
    <nav className='nav'>
     <ul className='nav__list'>
      <li className='nav__list-item'>
        <a className='nav__list-link'>Profile</a>
      </li>
      <li className='nav__list-item'>
        <a className='nav__list-link'>Messages</a>
      </li>
      <li className='nav__list-item'>
        <a className='nav__list-link'>News</a>
      </li>
      <li className='nav__list-item'>
        <a className='nav__list-link'>Music</a>
      </li>
      <li className='nav__list-item'>
        <a className='nav__list-link'>Settings</a>
      </li>
     </ul>
    </nav>
 );
}

export default Navbar;