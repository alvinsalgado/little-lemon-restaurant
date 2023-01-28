import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ConfirmedBooking from './pages/ConfirmedBooking';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/reservation' element={<BookingPage />}></Route>
        <Route path='/confirmed' element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
