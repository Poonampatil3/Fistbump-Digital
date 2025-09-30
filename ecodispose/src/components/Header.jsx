import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <i className="fas fa-recycle logo-icon"></i>
        <span className="logo-text">EcoDispose</span>
      </div>
      
      <div className="user-actions">
        <div className="user-profile">
          <i className="fas fa-user-circle profile-icon"></i>
          <button onClick={onLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
