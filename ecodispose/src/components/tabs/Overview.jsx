import React from 'react';
import './styles/Overview.css';

const Overview = ({ onSectionChange }) => {
  const quickActions = [
    {
      id: 'pickup-schedule',
      icon: 'fas fa-truck',
      title: 'Schedule Collection',
      description: 'Easy and convenient waste pickup from your doorstep',
      buttonText: 'Book Now',
      color: '#4CAF50',
      bgColor: '#E8F5E9'
    },
    {
      id: 'dropoff-centers',
      icon: 'fas fa-map-marker-alt',
      title: 'Recycling Centers',
      description: 'Find nearby centers for waste disposal',
      buttonText: 'Find Centers',
      color: '#2196F3',
      bgColor: '#E3F2FD'
    },
    {
      id: 'upcycling-ideas',
      icon: 'fas fa-lightbulb',
      title: 'Smart Recycling',
      description: 'Creative ideas for waste transformation',
      buttonText: 'Get Ideas',
      color: '#FF9800',
      bgColor: '#FFF3E0'
    }
  ];

  return (
    <div className="overview-container">
      <div className="hero-section">
        <h1>Welcome to <span className="highlight">EcoDispose</span></h1>
        <p>Your Partner in Smart Waste Management</p>
      </div>

      <div className="action-grid">
        {quickActions.map(action => (
          <div 
            key={action.id} 
            className="action-card"
            style={{ backgroundColor: action.bgColor, color: action.color }}
            onClick={() => onSectionChange(action.id)}
          >
            <div className="card-content">
              <div className="icon-circle">
                <i className={action.icon}></i>
              </div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
              <button className="action-btn">
                {action.buttonText}
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <i className="fas fa-tree"></i>
          <div className="stat-info">
            <h4>Trees Saved</h4>
            <span className="stat-number">1,234</span>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-recycle"></i>
          <div className="stat-info">
            <h4>Waste Recycled</h4>
            <span className="stat-number">50.2t</span>
          </div>
        </div>
        <div className="stat-card">
          <i className="fas fa-users"></i>
          <div className="stat-info">
            <h4>Active Users</h4>
            <span className="stat-number">5,678</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
