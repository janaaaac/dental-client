import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import HeroSection from './Components/HeroSection';
// import Hero from './Components/HeroSection';
// import DentalFeatures from './Components/Features';
// import AboutUs from './Components/About Us';
// import WhyChooseUs from './Components/WhyChooseUs';
// import StatsBanner from './Components/StatsBanner';
// import ServicesGrid from './Components/ServiceSection';
// import ServicesSection from './Components/ServicesSection';
// import TestimonialsSection from './Components/TestimonialsSection';
// import BlogSection from './Components/BlogSection';
// import Footer from './Components/Footer';
// import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
import PatientProfile from './Pages/PatientProfile';
import BookAppointment from './Pages/BookAppointment';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import AboutHero from './Pages/AboutUs';
import AvailableDentists from './Pages/AvailableDentists';



function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-layout">
          {/* <Hero />
          <DentalFeatures />
          <AboutUs />
          <WhyChooseUs />
          <StatsBanner />
          <ServicesGrid />
          <ServicesSection />
          <TestimonialsSection  />
          <BlogSection /> 
          <Footer />   */}
          {/* <LoginPage />  */}
          {/* <RegisterPage /> */}
          {/* <BookAppointment /> */}
          {/* <ContactPage /> */}
          {/* <BlogPage /> */}
          {/* <AboutHero /> */}
          <AvailableDentists />
          <div className="main-content">
           
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;