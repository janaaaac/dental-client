import React from 'react';

const SignInPage = () => {
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

        /* Sign In Form styles */
        .signin-container {
          max-width: 400px;
          margin: 0rem auto;
          padding: 2rem;
        }

        .signin-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          color: #111827;
        }

        .signin-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
          text-align: center;
          color: #6b7280;
          position: relative;
          margin: 1rem 0;
        }

        .google-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
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
          width: 1rem;
          height: 1rem;
        }

        .signin-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #0ea5e9;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .signin-button:hover {
          background-color: #0284c7;
        }

        /* Responsive design */
        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }
          
          .signin-container {
            margin: 2rem auto;
            padding: 1rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Sign In Form */}
        <div className="signin-container">
          <h2 className="signin-title">Sign In</h2>
          
          <form className="signin-form">
            <div className="form-group">
              <label>Email or Phone number</label>
              <input 
                type="text"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password"
                className="form-input"
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
              className="signin-button"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;