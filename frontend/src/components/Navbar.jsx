import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const handleLogout = () => signOut();

  const dropdownItems = {
    products: [
      { name: "Residential Proxies", link: "/products/residential", icon: "🏠" },
      { name: "Datacenter Proxies", link: "/products/datacenter", icon: "🖥️" },
      { name: "Mobile Proxies", link: "/products/mobile", icon: "📱" }
    ],
    locations: [
      { name: "North America", link: "/locations/na", icon: "🇺🇸" },
      { name: "Europe", link: "/locations/eu", icon: "🇪🇺" },
      { name: "Asia", link: "/locations/asia", icon: "🇨🇳" }
    ],
    useCases: [
      { name: "Web Scraping", link: "/use-cases/scraping", icon: "🕸️" },
      { name: "SEO Monitoring", link: "/use-cases/seo", icon: "🔍" },
      { name: "Ad Verification", link: "/use-cases/ads", icon: "📢" }
    ],
    resources: [
      { name: "Documentation", link: "/docs", icon: "📚" },
      { name: "API Reference", link: "/api", icon: "⚙️" },
      { name: "Help Center", link: "/help", icon: "❓" }
    ]
  };

  const renderDesktopDropdown = (key, title) => (
    <div className="group relative">
      <button className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors px-3 py-2 font-medium text-sm">
        {title}
        <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ease-in-out z-50 transform">
        <div className="py-1">
          {dropdownItems[key].map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMobileDropdown = (key, title) => (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
        className="flex justify-between items-center w-full py-3 px-4 text-gray-700 font-medium"
      >
        <span>{title}</span>
        <svg className={`h-5 w-5 transform transition-transform ${mobileDropdown === key ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === key ? 'max-h-40' : 'max-h-0'}`}>
        {dropdownItems[key].map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="flex items-center py-2 px-6 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );

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
          <div className="hidden md:flex items-center space-x-1">
            {renderDesktopDropdown('products', 'Products')}
            {renderDesktopDropdown('locations', 'Locations')}
            {renderDesktopDropdown('useCases', 'Use Cases')}
            {renderDesktopDropdown('resources', 'Resources')}
            
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
        <div className="pt-2 pb-4">
          {renderMobileDropdown('products', 'Products')}
          {renderMobileDropdown('locations', 'Locations')}
          {renderMobileDropdown('useCases', 'Use Cases')}
          {renderMobileDropdown('resources', 'Resources')}
          
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