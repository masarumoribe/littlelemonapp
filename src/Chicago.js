import './Chicago.css'
import cocktailImg from './assets/cocktail.jpg'
import restaurantExterior from './assets/restaurantExterior.jpg'

function Chicago() {
    return(
        <main className='about'>
            <div>
            <h1 className='about-title'>Little Lemon</h1>
            <h3 className='about-chicago'>Chicago</h3>
            <p className='about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='about-img-container'>
                <img src={cocktailImg} alt='little lemon cocktail' className='about-cocktail-img'></img>
                <img src={restaurantExterior} alt='little lemon exterior' className='about-exterior-img'></img>
            </div>
        </main>
    )
}

export default Chicago;