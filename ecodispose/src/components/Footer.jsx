import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <i className="fas fa-recycle"></i>
            <span>EcoDispose</span>
          </div>
          <p>Building a sustainable future through smart waste management.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#disposal"><i className="fas fa-trash"></i>Disposal Guide</a></li>
            <li><a href="#upcycling"><i className="fas fa-lightbulb"></i>Upcycling Ideas</a></li>
            <li><a href="#centers"><i className="fas fa-map-marker-alt"></i>Drop-off Centers</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="fas fa-envelope animated-icon"></i> support@ecodispose.com</p>
          <p><i className="fas fa-phone animated-icon"></i> +91 (020) 4567-8900</p>
          <p><i className="fas fa-map-marker-alt animated-icon"></i> Nashik, Maharashtra</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 EcoDispose. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
