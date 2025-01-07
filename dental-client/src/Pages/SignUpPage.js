import React from 'react';

const SignUpPage = () => {
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
          min-height: 100vh;
          background-color: #f0f9ff;
        }

       
        /* Sign Up Form styles */
        .signup-container {
          max-width: 800px;
          margin: 0rem auto;
          padding: 2rem;
        }

        .signup-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          color: #111827;
        }

        .signup-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          color: #4b5563;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: #0ea5e9;
        }

        .divider {
          grid-column: span 2;
          text-align: center;
          color: #6b7280;
          margin: 1rem 0;
        }

        .google-button {
          grid-column: span 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          background-color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .google-button:hover {
          background-color: #f3f4f6;
        }

        .google-icon {
          width: 1.5rem;
          height: 1.5rem;
        }

        .signup-button {
          grid-column: span 2;
          width: 100%;
          max-width: 300px;
          margin: 1rem auto;
          padding: 0.75rem;
          background-color: #0ea5e9;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .signup-button:hover {
          background-color: #0284c7;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .signup-form {
            grid-template-columns: 1fr;
          }

          .divider,
          .google-button,
          .signup-button {
            grid-column: span 1;
          }
          
          .nav-links {
            display: none;
          }
        }
      `}</style>

      <div className="container">

        {/* Sign Up Form */}
        <div className="signup-container">
          <h2 className="signup-title">Sign Up</h2>
          
          <form className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text"
                className="form-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password"
                className="form-input"
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input 
                type="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Re-Type Password</label>
              <input 
                type="password"
                className="form-input"
                placeholder="Confirm your password"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel"
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="divider">Or</div>

            <button 
              type="button"
              className="google-button"
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="google-icon"
              />
              Continue with Google
            </button>

            <button 
              type="submit"
              className="signup-button"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;