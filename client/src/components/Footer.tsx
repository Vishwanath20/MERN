import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${theme === 'dark' ? 'bg-dark border-top border-secondary text-white' : 'bg-light border-top text-dark'} py-5 mt-5`}>
      <div className="container">
        <div className="row mb-4">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>About MERN</h5>
            <p className={theme === 'dark' ? 'text-light' : 'text-secondary'}>
              A modern full-stack web application built with MongoDB, Express, React, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className={`text-decoration-none ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-decoration-none ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-decoration-none ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-decoration-none ${theme === 'dark' ? 'text-info' : 'text-primary'}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className={`fw-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>Contact</h5>
            <p className={theme === 'dark' ? 'text-light' : 'text-secondary'}>
              📧 Email: info@mernapp.com
            </p>
            <p className={theme === 'dark' ? 'text-light' : 'text-secondary'}>
              📱 Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-top ${theme === 'dark' ? 'border-secondary' : ''} pt-4 text-center`}>
          <p className={`mb-1 ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
            © {currentYear} MERN Application. All rights reserved.
          </p>
          <p className={`small ${theme === 'dark' ? 'text-light' : 'text-secondary'}`}>
            Built with React, Vite & Bootstrap
          </p>
        </div>
      </div>
    </footer>
  );
};