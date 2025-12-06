import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const MernOperation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {/* Hero Section */}
      <div className={`${theme === 'dark' ? 'bg-dark' : 'bg-light'} rounded-lg p-5 mb-5 border ${theme === 'dark' ? 'border-secondary' : 'border-light'}`}>
        <h1 className={`display-4 fw-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Welcome to MERN Application</h1>
        <p className={`lead ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
          MERN OPERATION
        </p>
      </div>

      {/* Features Section */}
      <div className="row mb-5">
        {/* Feature 1 - Frontend */}
        <div className="col-md-4 mb-3">
          <div className={`card h-100 ${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-white border-light'}`}>
            <div className="card-body">
              <h5 className={`card-title text-primary fw-bold ${theme === 'dark' ? 'text-info' : ''}`}>
                <svg className="bi me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.71l-5.223 2.206A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
                Frontend
              </h5>
              <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
                Built with React, TypeScript, Vite, and Tailwind CSS for a fast and modern UI.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 - Backend */}
        <div className="col-md-4 mb-3">
          <div className={`card h-100 ${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-white border-light'}`}>
            <div className="card-body">
              <h5 className={`card-title text-success fw-bold ${theme === 'dark' ? 'text-success' : ''}`}>
                <svg className="bi me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2z" />
                </svg>
                Backend
              </h5>
              <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
                Powered by Node.js and Express server for robust API endpoints and business logic.
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 - Database */}
        <div className="col-md-4 mb-3">
          <div className={`card h-100 ${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-white border-light'}`}>
            <div className="card-body">
              <h5 className={`card-title text-danger fw-bold ${theme === 'dark' ? 'text-danger' : ''}`}>
                <svg className="bi me-2" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1c-1.573 0-3.022.289-4.096.777C2.75 2.075 2 2.418 2 2.5s.75.425 1.904.723C5.978 3.711 7.427 4 8 4s2.022-.289 3.096-.777C12.25 2.925 13 2.582 13 2.5s-.75-.425-1.904-.723C10.022 1.289 8.573 1 8 1z" />
                </svg>
                Database
              </h5>
              <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
                MongoDB for flexible document storage and Mongoose for elegant object modeling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`alert text-center py-4 ${
        theme === 'dark' 
          ? 'alert-info' 
          : 'alert-primary'
      }`}>
        <h4 className={`mb-2 fw-bold ${theme === 'dark' ? 'text-dark' : ''}`}>Ready to Get Started?</h4>
        <p className={`mb-3 ${theme === 'dark' ? 'text-dark' : ''}`}>Explore our features and build amazing applications with MERN stack.</p>
        <button className="btn btn-primary mt-2">Learn More</button>
      </div>
    </div>
  );
};

export default MernOperation;