import { useReducer, useEffect } from 'react'
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import Nav from './Nav'
import Home from './Home'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Order from './Order';
import Chicago from './Chicago'
import Footer from './Footer'
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom'

const fetchAPI = function(){
  let result = [];
  for (let i = 17; i <= 23; i++) {
    if(Math.random() < 0.5){
      result.push(i + ':00')
    }
    if(Math.random() > 0.5){
      result.push(i + ':30')
    }
  }
  return result;
}

 export function updateTimes(state, action) {
  // switch(action.type){
  //   case 'CHANGE_DATE':
  //     return {...state, date: action.e}
  //   case 'CHANGE_TIME':
  //     return {...state}
  //   default:
  //     return state;
  // }
  return { ...state, date: action.e, times: fetchAPI()}
}

const submitAPI = function(){
  return true
}

function Main() {

  const initializeTimes = {
      date: "",
      times: fetchAPI()
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();

  const submitForm = function(formData) {
    if(submitAPI(formData)){
      navigate("/booking-confirmed")
    }
    console.log(formData)
  }

  return (
    <main>
       <Nav />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Hero />} />
        <Route path='/specials' element={<Specials />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/booking' element={<BookingPage state={state} availableTimes={state.times} dispatch={dispatch} submitForm={submitForm}/>} />
        <Route path='/booking-confirmed' element={<ConfirmedBooking />} />
        <Route path='/about' element={<Chicago />} />
        <Route path='/order' element={<Order />} />
       </Routes>
    </main>
  );
}

export default Main;
