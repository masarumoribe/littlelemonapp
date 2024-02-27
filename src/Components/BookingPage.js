// import { useState, useReducer } from 'react';
import BookingForm from './BookingForm'

function BookingPage(props){

    return(
        <>
            <BookingForm state={props.state} availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </>
    );
}

export default BookingPage;