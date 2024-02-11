import Footer from'./Footer'
import './ConfirmedBooking.css'

function ConfirmedBooking(props) {

    return(
        <>
            <div className='confirmed-screen'>
                <h1 className='confirmed-message'>Your have successfully made a reservation!</h1>
            </div>
            <Footer />
        </>
    );
}

export default ConfirmedBooking;