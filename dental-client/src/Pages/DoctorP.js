import React, { useState } from 'react';

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState('2023/12/19');
  
  return (
    <div className="dental-app">
      <nav>
        <div className="logo">DentalNet</div>
        <div className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Booking</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
      </nav>

      <main>
        <h1>Doctor Profile</h1>

        <div className="doctor-card">
          <div className="doctor-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div className="doctor-info">
            <h2>Dr. Kasun Silva</h2>
            <p>Dental Doctor</p>
            <p>Counselor</p>
            <p>Special Note:</p>
          </div>
          <div className="rating">
            {'★'.repeat(5)}
            <span>120 reviews</span>
          </div>
        </div>

        <div className="clinic-info">
          <div className="time-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <p>NAVINNA MEDICAL HOSPITAL - MAHARAGAMA SESSIONS</p>
            <p>Dental Clinic</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <h3>Experience</h3>
            <ul>
              <li>5 Years Experience - in Navinna Medical Hospital</li>
              <li>2 Years Experience - in Ragama Medical Hospital</li>
            </ul>
          </div>
          <div className="detail-item">
            <h3>Services</h3>
            <p>Teeth cleaning, Braces, root canal</p>
          </div>
          <div className="detail-item">
            <h3>Specializations</h3>
            <p>Specialization of Dentist</p>
          </div>
          <div className="detail-item">
            <h3>Education</h3>
            <ul>
              <li>BSc in Peradeniya University</li>
              <li>PhD in Medical College in UK</li>
            </ul>
          </div>
        </div>

        <div className="booking-section">
          <div className="calendar-section">
            <h3>Select Your Session Date</h3>
            <div className="date-picker">
              <input 
                type="text" 
                value={selectedDate} 
                readOnly 
                className="selected-date"
              />
              <div className="calendar">
                <div className="calendar-header">
                  <button>←</button>
                  <span>December 2023</span>
                  <button>→</button>
                </div>
                <div className="weekdays">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="calendar-days">
                  {Array.from({ length: 31 }, (_, i) => (
                    <div key={i + 1} className={i + 1 === 19 ? 'selected' : ''}>
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="time-slots">
            <h3>Available slots for the selected date</h3>
            <div className="slots-list">
              <div className="time-slot">9:00 AM</div>
              <div className="time-slot">11:00 AM</div>
              <div className="time-slot">2:00 PM</div>
            </div>
            <button className="book-btn">Book Appointment</button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .dental-app {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #e5f6ff;
          margin-bottom: 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #0099ff;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #0099ff;
          text-decoration: none;
        }

        h1 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .doctor-card {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
        }

        .doctor-avatar {
          width: 100px;
          height: 100px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .doctor-avatar svg {
          width: 60%;
          height: 60%;
        }

        .doctor-info h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .rating {
          color: #ffd700;
          font-size: 1.25rem;
        }

        .rating span {
          color: #666;
          font-size: 0.875rem;
          margin-left: 0.5rem;
        }

        .clinic-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
        }

        .time-icon {
          width: 40px;
          height: 40px;
          background: #f0f0f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .detail-item h3 {
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .booking-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .calendar {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          text-align: center;
        }

        .calendar-days div {
          padding: 0.5rem;
          cursor: pointer;
        }

        .calendar-days div.selected {
          background: #0099ff;
          color: white;
          border-radius: 50%;
        }

        .time-slots {
          padding: 1rem;
        }

        .slots-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .time-slot {
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          text-align: center;
        }

        .book-btn {
          width: 100%;
          padding: 1rem;
          background: #0099ff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }

        .book-btn:hover {
          background: #0088ee;
        }

        .selected-date {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default DoctorProfile;