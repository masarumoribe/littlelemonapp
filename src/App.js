import './App.css';
import BookingPage from './BookingPage'
import Nav from './Nav'
import Home from './Home'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Order from './Order';
import Chicago from './Chicago'
import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
       <Nav />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Hero />} />
        <Route path='/specials' element={<Specials />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/about' element={<Chicago />} />
        <Route path='/order' element={<Order />} />
       </Routes>
    </>
  );
}

export default App;
