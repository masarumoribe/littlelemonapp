import logo from './assets/Logo.png'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
        <img alt="Little Lemon restaurant logo" src={logo} className='logo'></img>
        <ul className='nav-links'>
          <li>
            <a className='nav-link' href='#home'>Home</a>
          </li>
          <li>
            <a className='nav-link' href='#about'>About</a>
          </li>
          <li>
            <a className='nav-link' href='#menu'>Menu</a>
          </li>
          <li>
            <a className='nav-link' href='#reservations'>Reservations</a>
          </li>
          <li>
            <a className='nav-link' href='#order'>Order online</a>
          </li>
          <li>
            <button className='login-btn'>Login</button>
          </li>
        </ul>
      </nav>
    )
}

export default Nav;