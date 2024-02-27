import './Confirmation.css'
import { useLocation, useNavigate } from 'react-router-dom';

function Confirmation(props) {

    const navigate = useNavigate();

    const location = useLocation();

    const confirmReservation = function() {
        navigate("/booking-confirmed", {state:location.state.formData})
    }

    return(
        <>
            <div className='confirmation-screen'>
                <h1 className='confirmation-message'> Please confirm the following information in order to proceed with the reservation </h1>
                <h2>Date: <span>{location.state.formData.date}</span></h2>
                <h2>Time: <span>{location.state.formData.time}</span></h2>
                <h2>Guests: <span>{location.state.formData.pax}</span></h2>
                <h2>Occasion: <span>{location.state.formData.occasion ? location.state.formData.occasion : "None"}</span></h2>
                <br></br>
                <h2>Name: <span>{location.state.formData.name}</span></h2>
                <h2>Email: <span>{location.state.formData.email}</span></h2>
                <button onClick={confirmReservation} className='res-submit'>I confirm!</button>
            </div>
        </>
    );
}

export default Confirmation;