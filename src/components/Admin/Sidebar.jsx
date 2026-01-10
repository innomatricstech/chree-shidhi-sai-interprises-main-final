import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className={`lg:hidden fixed top-0 left-0 z-20 w-full ${darkMode ? 'bg-dark-primary' : 'bg-gray-800'} px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <span className="ml-3 text-white font-bold text-lg">Admin Panel</span>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
          <span className="text-white mx-3">{user?.username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
        <div className={`flex flex-col w-64 ${darkMode ? 'bg-dark-primary' : 'bg-gray-800'} h-full`}>
          <div className={`flex items-center justify-between h-16 px-4 ${darkMode ? 'bg-dark-secondary' : 'bg-gray-900'}`}>
            <h1 className="text-white font-bold text-xl">Admin Panel</h1>
            <ThemeToggle />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <Link
                to="/admin/dashboard"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/admin/dashboard')
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <svg
                  className="mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </Link>

              <Link
                to="/admin/clients"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/admin/clients')
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <svg
                  className="mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Clients
              </Link>

              <Link
                to="/admin/gallery"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  isActive('/admin/gallery')
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <svg
                  className="mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Gallery
              </Link>

              <Link
                to="/"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="mr-3 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Website
              </Link>
            </nav>
          </div>
          <div className={`flex-shrink-0 flex border-t ${darkMode ? 'border-gray-600' : 'border-gray-700'} p-4`}>
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{user?.username}</p>
                  <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Admin</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-auto bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 z-10 ${darkMode ? 'bg-dark-primary' : 'bg-gray-800'} bg-opacity-90`}>
          <div className="pt-16 pb-3 px-2 space-y-1">
            <Link
              to="/admin/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/admin/dashboard') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/admin/clients"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/admin/clients') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              to="/admin/gallery"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/admin/gallery') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Website
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
