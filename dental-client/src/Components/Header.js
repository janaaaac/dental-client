import React from 'react';
import { User } from 'lucide-react';

const Header = () => {
  return (
    <>
      <style>
        {`
          .header {
            background-color: #F0F9FF;
            padding: 1rem 2rem;
          }

          .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .logo {
            color: #0EA5E9;
            font-size: 1.5rem;
            font-weight: 600;
            text-decoration: none;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .nav-link {
            color: #4B5563;
            text-decoration: none;
            transition: color 0.2s ease;
          }

          .nav-link:hover {
            color: #0EA5E9;
          }

          .user-button {
            color: #4B5563;
            background: none;
            border: none;
            cursor: pointer;
            transition: color 0.2s ease;
          }

          .user-button:hover {
            color: #0EA5E9;
          }
        `}
      </style>

      <header className="header">
        <nav className="nav-container">
          {/* Logo */}
          <a href="/" className="logo">
            DentalNet
          </a>

          {/* Navigation Links */}
          <div className="nav-links">
            <a href="/home" className="nav-link">
              Home
            </a>
            <a href="/book-appointment" className="nav-link">
              Booking
            </a>
            <a href="/profile" className="nav-link">
              Doctors
            </a>
            <a href="/doctor-profile" className="nav-link">
              About
            </a>
            <a href="/my-appointments" className="nav-link">
              Contact
            </a>
          </div>

          {/* User Icon */}
          <button className="user-button">
            <User size={24} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;