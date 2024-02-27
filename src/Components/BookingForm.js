import { useState } from 'react';
import './BookingForm.css'

function BookingForm(props) {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [pax, setPax] = useState("");
    const [occasion, setOccasion] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [focused, setFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setTime("");
        setPax("");
        setOccasion("");
        setName("");
        setEmail("");
        props.submitForm({date: date, time: time, pax: pax, occasion: occasion, name: name, email: email})
    };

    const handleChange = (e) => {
        setDate(e);
        console.log(e);
        props.dispatch(e);
        console.log(props.state)
    }

    const handleFocus = (e) => {
        setFocused(true);
    }

    return(
        <div className='form-screen'>
            <h1 className='res-title'>Table Booking</h1>
            <hr className='separator'></hr>
            <h2 className='res-subtitle'>Booking Information</h2>
            <form className='res-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} onBlur={handleFocus} focused={focused.toString()} required/>
                    <span>*You should choose a date</span>
                </div>
                <div>
                    <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} onBlur={handleFocus} focused={focused.toString()} required>
                        <option value="">Display Times</option>
                        {
                            props.availableTimes.map(availableTime => {return <option key={availableTime} value={availableTime}>{availableTime}</option>})
                        }
                    </select>
                    <span>*You should choose a time</span>
                </div>
                <div>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={pax} onBlur={handleFocus} focused={focused.toString()} onChange={(e) => setPax(e.target.value)} required/>
                    <span>*You should choose the number of guests</span>
                </div>
                <div>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </div>
                <hr className='separator'></hr>
                <h2 className='res-subtitle'>Personal Information</h2>
                <div>
                    <label htmlFor="res-name">Name</label>
                    <input type="text" id="res-name" value={name} minLength={1} onBlur={handleFocus} focused={focused.toString()} onChange={(e) => setName(e.target.value)} required/>
                    <span>*Your name sould be longer than 1 character</span>
                </div>
                <div>
                    <label htmlFor="res-email">Email</label>
                    <input type="email" id="res-email" value={email} onBlur={handleFocus} focused={focused.toString()} onChange={(e) => setEmail(e.target.value)} required/>
                    <span>*It should be a valid email address</span>
                </div>
                <div>
                    <input className='res-submit' type="submit" value="Make a reservation" data-testid="submitBttn" aria-label='On Click'/>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;