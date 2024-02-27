import './BookingConfirmed.css'
import { useLocation } from "react-router-dom";

function BookingConfirmed(props) {

    const location = useLocation();

    console.log(location);

    return(
        <>
            <div className="confirmed-screen">
                <h1 className="confirmed-message">You have successfully made a booking!</h1>
                <h1>These are you details:</h1>
                <h2>Date: <span>{location.state.date}</span></h2>
                <h2>Time: <span>{location.state.time}</span></h2>
                <h2>Guests: <span>{location.state.pax}</span></h2>
                <h2>Occasion: <span>{location.state.occasion ? location.state.occasion : "None"}</span></h2>
                <br></br>
                <h2>Name: <span>{location.state.name}</span></h2>
                <h2>Email: <span>{location.state.email}</span></h2>
            </div>
        </>
    );
}

export default BookingConfirmed;