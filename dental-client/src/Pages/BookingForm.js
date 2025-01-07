import React from 'react';

const BookingForm = () => {
  return (
    <>
      <style>{`
        /* Global styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .container {
        padding-top: 50px;
          min-height: 100vh;
          background-color: #f0f9ff;
        }

        /* Booking Form Section */
        .booking-section {
          max-width: 1200px;
          margin: 0rem auto;
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .booking-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .form-section {
          padding: 3rem;
        }

        .image-section {
          background-image: url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000');
          background-size: cover;
          background-position: center;
          min-height: 100%;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-field {
          position: relative;
        }

        .form-field.full {
          grid-column: span 2;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: #0ea5e9;
        }

        textarea.form-input {
          min-height: 120px;
          resize: vertical;
        }

        .book-button {
          background-color: #0ea5e9;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 1rem;
        }

        .book-button:hover {
          background-color: #0284c7;
        }

        @media (max-width: 768px) {
          .booking-container {
            grid-template-columns: 1fr;
          }

          .image-section {
            display: none;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-field.full {
            grid-column: span 1;
          }

          .nav-links {
            display: none;
          }

          .form-section {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="container">

        {/* Booking Form */}
        <div className="booking-section">
          <div className="booking-container">
            <div className="form-section">
              <form>
                <div className="form-grid">
                  <div className="form-field">
                    <input 
                      type="text"
                      className="form-input"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input 
                      type="text"
                      className="form-input"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-field full">
                    <input 
                      type="email"
                      className="form-input"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-field full">
                    <input 
                      type="tel"
                      className="form-input"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div className="form-field full">
                    <input 
                      type="date"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-field full">
                    <textarea 
                      className="form-input"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="book-button">
                  Book Now
                </button>
              </form>
            </div>
            <div className="image-section"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;