import React, { useState } from "react";
import "./DropdownMenu.css"; // Import CSS for styling

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-menu">
      {/* Profile Icon */}
      <div className="profile-section" onClick={() => setIsOpen(!isOpen)}>
        <span className="icon">\uD83D\uDC64</span>
        <span>Profile</span>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="menu">
          <div className="welcome-section">
            <p>Welcome</p>
            <button className="login-button">LOGIN / SIGNUP</button>
          </div>
          <ul>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
            <li>Credit</li>
            <li>Coupons</li>
            <li>Saved Cards</li>
            <li>Saved VPA</li>
            <li>Saved Addresses</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;