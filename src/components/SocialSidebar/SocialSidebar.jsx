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
      <a href="https://www.facebook.com/hullectservicespvtltd/?ti=as" className="facebook" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/hullectservices/" className="instagram" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/posts/hullect-services-pvt-ltd_hullect-services-pvt-ltd-linkedin-activity-6826091504340144128-U725/" className="linkedin" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://www.google.com/maps/place/Hullect+Services+Private+Limited/@26.8266997,81.0084445,17z/data=!3m1!4b1!4m6!3m5!1s0x399be3989c5e0a3d:0xa7dfa5771d5febbb!8m2!3d26.8266997!4d81.0084445!16s%2Fg%2F11mx5wp9zf!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" className="location" target="_blank" rel="noopener noreferrer">
        <FaMapMarkerAlt />
      </a>
      <a href="tel:+91 91200 18844" className="phone">
        <FaPhoneAlt />
      </a>
      <a href="https://wa.me/919120018844" className="whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialSidebar;
