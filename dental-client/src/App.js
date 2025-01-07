import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignInPage from './Pages/SignInPage';
import BookingForm from './Pages/BookingForm';
import DoctorProfile from './Pages/DoctorProfile';
import Messages from './Pages/Messages';
import SignUpPage from './Pages/SignUpPage'; // Import SignUpPage
import ProfilePage from './Pages/Profile';
import BookAppointment from './Pages/BookAppointment';
import './App.css';
import LandingPage from './Pages/LandingPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-layout">
      
          <div className="main-content">
            <Routes>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/booking" element={<BookingForm />} />
              <Route path="/contact" element={<SignInPage />} />
              <Route path="/about" element={<SignUpPage />} />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="/" element={<LandingPage />} /> {/* Use DentalLanding */}
              {/* Other routes */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;