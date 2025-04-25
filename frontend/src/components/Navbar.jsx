import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => signOut();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TradingBot
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/api" 
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              API
            </Link>
            <Link 
              to="/docs" 
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Documentation
            </Link>
            <Link 
              to="/pricing" 
              className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
                >
                  Sign Out
                </button>
                <div className="ml-4 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                    {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/signin" 
                  className="px-3 py-2 text-gray-700 hover:text-indigo-600 font-medium text-sm transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all shadow-sm hover:shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {isSignedIn && (
              <div className="mr-4 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </div>
            )}
            <button
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="pt-2 pb-4 space-y-1">
          <Link
            to="/api"
            className="block py-3 px-4 text-gray-700 border-b border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            API
          </Link>
          <Link
            to="/docs"
            className="block py-3 px-4 text-gray-700 border-b border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link
            to="/pricing"
            className="block py-3 px-4 text-gray-700 border-b border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>

          <div className="px-4 py-3 border-t border-gray-100">
            {isSignedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;