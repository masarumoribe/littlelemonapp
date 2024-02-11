import './Testimonials.css'
import persona1 from '../assets/persona1.jpg'
import persona2 from '../assets/persona2.jpg'
import persona3 from '../assets/persona3.jpg'
import persona4 from '../assets/persona4.jpg'

function Testimonials(){
    return(
        <main className='testimonials'>
            <h1 className='testimonials-title'>Testimonials</h1>
            <div className='testimonials-card-container'>
            <div className='testimonials-card'>
                <img src={persona1} alt='first testimonial' className='testimonials-card-img'></img>
                <div className='testimonials-card-description'>
                    <div className='testimonials-card-title'>
                    <h4><b>Mark</b></h4>
                    </div>
                    <div>
                    <span className="fa fa-star checked"></span>
                    <span>4.5</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='testimonials-card'>
                <img src={persona2} alt='second testimonial' className='testimonials-card-img'></img>
                <div className='testimonials-card-description'>
                <div className='testimonials-card-title'>
                    <h4><b>Jamie</b></h4>
                    </div>
                    <div>
                    <span className="fa fa-star checked"></span>
                    <span>4.5</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='testimonials-card'>
                <img src={persona3} alt='third testimonial' className='testimonials-card-img'></img>
                <div className='testimonials-card-description'>
                <div className='testimonials-card-title'>
                    <h4><b>Rick</b></h4>
                    </div>
                    <div>
                    <span className="fa fa-star checked"></span>
                    <span>4.5</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className='testimonials-card'>
                <img src={persona4} alt='third testimonial' className='testimonials-card-img'></img>
                <div className='testimonials-card-description'>
                <div className='testimonials-card-title'>
                    <h4><b>Amber</b></h4>
                    </div>
                    <div>
                    <span className="fa fa-star checked"></span>
                    <span>4.5</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Testimonials