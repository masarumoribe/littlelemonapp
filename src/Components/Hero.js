import img from '../assets/restauranfood.jpg'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <main className='hero'>
            <div>
            <h1 className='title'>Little Lemon</h1>
            <h3 className='chicago'>Chicago</h3>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            {/* <button className='reserve-btn'>Reserve a Table</button> */}
            <Link className='reserve-btn' to='./Booking'>Reserve a Table</Link>
            </div>
            <div className='entree-img-container'>
                <img src={img} alt='little lemon entree' className='entree-img'></img>
            </div>
        </main>
    )
}

export default Hero;