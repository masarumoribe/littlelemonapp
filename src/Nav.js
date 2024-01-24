import logo from './assets/logo.png'
import './Nav.css'
import BookingPage from './BookingPage';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
        <img alt="Little Lemon restaurant logo" src={logo} className='logo'></img>
        <ul className='nav-links'>
          <li>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='nav-link' to='/about'>About</Link>
          </li>
          <li>
            <Link className='nav-link' to='/specials'>Menu</Link>
          </li>
          <li>
            <Link className='nav-link' to='/booking'>Reservations</Link>
          </li>
          <li>
            <Link className='nav-link' to='/specials'>Order online</Link>
          </li>
          <li>
            <button className='login-btn'>Login</button>
          </li>
        </ul>
      </nav>
    )
}

export default Nav;