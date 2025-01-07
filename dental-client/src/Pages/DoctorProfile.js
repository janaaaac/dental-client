import React, { useState } from 'react';

const DoctorProfile = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // Calendar logic
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const handleDateSelect = (day) => {
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
  };

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
  };

  return (
    <div className="dental-app">
      <style jsx>{`
        .dental-app {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

      
        .doctor-card {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
          display: flex;
          gap: 1.5rem;
        }

        .doctor-avatar {
          width: 100px;
          height: 100px;
          background: #f3f4f6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .doctor-info {
          flex-grow: 1;
        }

        .rating {
          color: #fbbf24;
        }

        .clinic-info {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
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

        /* Calendar Styles */
        .booking-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .calendar-section {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .calendar {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f9fafb;
        }

        .calendar-header button {
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          color: #4b5563;
        }

        .weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          padding: 0.5rem;
          background: #f3f4f6;
          font-weight: 500;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 1px;
          background: #e5e7eb;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          cursor: pointer;
        }

        .calendar-day:hover {
          background: #f3f4f6;
        }

        .calendar-day.selected {
          background: #2563eb;
          color: white;
        }

        .calendar-day.disabled {
          color: #9ca3af;
          cursor: not-allowed;
        }

        .time-slots {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .time-slot {
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          cursor: pointer;
          text-align: center;
        }

        .time-slot:hover {
          background: #f3f4f6;
        }

        .time-slot.selected {
          background: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .book-button {
          width: 100%;
          padding: 0.75rem;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 4px;
          margin-top: 1rem;
          cursor: pointer;
        }

        .book-button:hover {
          background: #1d4ed8;
        }
      `}</style>


      <h1>Doctor Profile</h1>

      <div className="doctor-card">
        <div className="doctor-avatar">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor">
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
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
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
          <div className="calendar">
            <div className="calendar-header">
              <button onClick={handlePrevMonth}>&lt;</button>
              <span>{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
              <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="weekdays">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="calendar-days">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="calendar-day"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1;
                const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const isSelected = selectedDate && 
                  currentDate.getDate() === selectedDate.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth() &&
                  currentDate.getFullYear() === selectedDate.getFullYear();
                const isDisabled = currentDate < new Date(new Date().setHours(0, 0, 0, 0));
                
                return (
                  <div
                    key={day}
                    className={`calendar-day ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                    onClick={() => !isDisabled && handleDateSelect(day)}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="calendar-section">
          <h3>Available Time Slots</h3>
          <div className="time-slots">
            {timeSlots.map(slot => (
              <button
                key={slot}
                className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
                onClick={() => handleTimeSlotSelect(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <button className="book-button">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;