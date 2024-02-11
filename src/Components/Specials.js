import './Specials.css'
import greekSalad from '../assets/greekSalad.jpg'
import kebab from '../assets/kebab.jpg'
import lemonCake from '../assets/lemonDessert.jpg'

function Specials() {
    return (
        <main className="specials">
            <div className='specials-header'>
            <h1 className='specials-title'>This week specials!</h1>
            <button className='menu-btn'>Online Menu</button>
            </div>
            <div className='card-container'>
            <div className='card'>
                <img src={greekSalad} alt='greek salad' className='card-img'></img>
                <div className='card-description'>
                    <div className='card-title'>
                    <h4><b>Greek Salad</b></h4>
                    <h4 className='price'>¥2,000</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='order-delivery'>Order for delivery</button>
                </div>
            </div>
            <div className='card'>
                <img src={kebab} alt='second special' className='card-img'></img>
                <div className='card-description'>
                <div className='card-title'>
                    <h4><b>Kebab Wrap</b></h4>
                    <h4 className='price'>¥2,000</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='order-delivery'>Order for delivery</button>
                </div>
            </div>
            <div className='card'>
                <img src={lemonCake} alt='third special' className='card-img'></img>
                <div className='card-description'>
                <div className='card-title'>
                    <h4><b>Lemon Cake</b></h4>
                    <h4 className='price'>¥2,000</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='order-delivery'>Order for delivery</button>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Specials;