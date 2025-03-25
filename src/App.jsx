import React, { useState } from "react";
import './App.css';
import Login from './Login';

const NavButton = ({ logo, text, isSelected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`nav-button ${isSelected ? 'selected' : isHovered ? 'hovered' : ''}`}>
      <button
        className="nav-button-content"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={logo}  
          alt={text}
          className={`nav-button-icon ${isSelected ? 'icon-selected' : 'icon-default'}`}
        />
        <span className="nav-button-text">{text}</span>
      </button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [
    { name: "Home", logo: "home.svg" },
    { name: "Menu", logo: "menu.svg" },
    { name: "Rewards", logo: "rewards.svg" },
    { name: "Edit Menu", logo: "edit-menu.svg" },
    { name: "Employee", logo: "employee.svg" },
    { name: "Profile", logo: "profile.svg" },
    { name: "Settings", logo: "settings.svg" },
    { name: "Log Out", logo: "log-out.svg", isLogout: true },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login state to true
  };

  const handleButtonClick = (buttonName) => {
    if (buttonName === "Log Out") {
      console.log("Logging out...");
    } else {
      setSelectedButton(buttonName);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // Render the Login component if not logged in
  }


  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo-container">
          <img src="logo.svg" alt="Main Logo" className="logo" />
        </div>
        <div className="button-container">
          {buttons.map(({ name, logo, isLogout }) => (
            <NavButton
              key={name}
              logo={logo}
              text={name}
              isSelected={selectedButton === name && !isLogout}
              onClick={() => handleButtonClick(name)}
            />
          ))}
        </div>
      </div>
      <div className="main-content">
        <h1 className="main-title">Welcome to the Main App</h1>
      </div>
    </div>
  );
};

export default App;
