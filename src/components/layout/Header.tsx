import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Verb Tenses', path: '/verb-tenses' },
    { name: 'Irregular Verbs', path: '/irregular-verbs' },
    { name: 'Vocabulary', path: '/vocabulary' },
    { name: 'Real-Life Situations', path: '/situations' },
    { name: 'Practice', path: '/practice' },
    { name: 'My Notebook', path: '/notebook' },
  ];

  return (
    <header className="bg-pink-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <GraduationCap size={28} />
            <span className="text-xl font-bold">English</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`hover:text-accent transition-colors ${
                  location.pathname === item.path ? 'font-bold border-b-2 border-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 py-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`block hover:text-accent transition-colors ${
                  location.pathname === item.path ? 'font-bold border-l-4 border-accent pl-2' : 'pl-3'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;