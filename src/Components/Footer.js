import footerLogo from '../assets/footer-logo.png'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <img alt="Little Lemon restaurant logo" src={footerLogo} className="footer-logo"></img>
            <div className="footer-nav">
              <h1>Doormat Navigation</h1>
              <ul>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#menu'>Menu</a>
                </li>
                <li>
                  <a href='#reservations'>Reservations</a>
                </li>
                <li>
                  <a href='#order'>Order online</a>
                </li>
                <li>
                  <a href='#login'>Login</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h1>Contact</h1>
              <ul>
                <li>
                  <a href='#address'>Address</a>
                </li>
                <li>
                  <a href='#phone'>Phone Number</a>
                </li>
                <li>
                  <a href='#email'>Email</a>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h1>Our Socials</h1>
              <ul>
                <li>
                  <a href='#address'>Address</a>
                </li>
                <li>
                  <a href='#phone'>Phone Number</a>
                </li>
                <li>
                  <a href='#email'>Email</a>
                </li>
              </ul>
            </div>
        </footer>
    )
}

export default Footer;