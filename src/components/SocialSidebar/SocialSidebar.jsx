import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://maps.google.com" className="location" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt />
      </a>
      <a href="tel:+911234567890" className="phone">
        <FaPhoneAlt />
      </a>
      <a href="https://wa.me/911234567890" className="whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialSidebar;
