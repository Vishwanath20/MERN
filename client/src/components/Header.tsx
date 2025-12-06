import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { label: 'Home', path: '/' },
     { label: 'mern', path: '/mern' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky-top">
      <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow`}>
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand fw-bold">
            <div 
              className={`d-inline-flex align-items-center justify-content-center rounded ${theme === 'dark' ? 'bg-primary' : 'bg-primary'}`} 
              style={{ width: '40px', height: '40px', color: 'white', marginRight: '10px' }}
            >
              M
            </div>
            <span className={`d-none d-sm-inline ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>MERN</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className={`navbar-toggler ${theme === 'dark' ? 'navbar-dark' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link to={item.path} className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`btn btn-sm ms-3 ${theme === 'dark' ? 'btn-warning' : 'btn-light'}`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg className="bi" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm6-6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-9 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
              ) : (
                <svg className="bi" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  <path d="M8 3a.5.5 0 0 0 .5.5v5a.5.5 0 0 0-1 0v-5A.5.5 0 0 0 8 3z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};