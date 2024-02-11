// import { useState, useReducer } from 'react';
import BookingForm from './BookingForm'
import Footer from './Footer'

function BookingPage(props){

    return(
        <>
            <BookingForm state={props.state} availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
            <Footer />
        </>
    );
}

export default BookingPage;