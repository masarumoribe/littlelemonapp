import { useState } from 'react';
import './BookingForm.css'

function BookingForm(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [pax, setPax] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setTime("");
        setPax("");
        setOccasion("");
        props.submitForm({date: date, time: time, pax: pax, occasion: occasion})
    };

    const handleChange = (e) => {
        setDate(e);
        console.log(e);
        props.dispatch(e);
        console.log(props.state)
    }

    return(
        <div className='form-screen'>
            <h1 className='res-title'>Table Booking</h1>
            <form className='res-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                        {
                            props.availableTimes.map(availableTime => {return <option key={availableTime} value={availableTime}>{availableTime}</option>})
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={pax} onChange={(e) => setPax(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <div>
                    <input className='res-submit' type="submit" value="Make Your reservation"/>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;