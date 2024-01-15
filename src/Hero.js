import img from './assets/restauranfood.jpg'
import './Hero.css'

function Hero() {
    return (
        <main className='hero'>
            <div>
            <h1 className='title'>Little Lemon</h1>
            <h3 className='chicago'>Chicago</h3>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className='reserve-btn'>Reserve a Table</button>
            </div>
            <div className='entree-img-container'>
                <img src={img} alt='little lemon entree' className='entree-img'></img>
            </div>
        </main>
    )
}

export default Hero;