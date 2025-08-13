import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
;

function Footer() {
  return (
    <div style={{ backgroundColor: '#3b0066', color: 'white', padding: '40px 20px', minHeight: '350px' }} 
         className="d-flex flex-column justify-content-center align-items-center text-center">
      
      {/* Contact Us */}
      <h2>Contact Us</h2>
      <p className="fs-5">
        <MdOutlineMail className="me-2" />
        rbuilder@gmail.com
      </p>
      <p className="fs-5">
        <FaPhoneAlt className="me-2" />
        9898989898
      </p>

      {/* Connect with Us */}
      <h4 className="mt-4">Connect with Us</h4>
      <div className="d-flex justify-content-center align-items-center fs-4 mt-2">
        <FaWhatsapp className="me-3" />
        <FaFacebook className="me-3" />
        <FaInstagram />
      </div>

      {/* Footer Note */}
      <p className="mt-4" style={{ fontStyle: 'italic', fontSize: '14px' }}>
        Designed & built with <span style={{ color: 'red' }}>❤️</span> using React
      </p>
    </div>
  )
}

export default Footer
