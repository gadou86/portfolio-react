import React from 'react'
import './style.css'

export const Contact = () => {
  return (
    <div className="contact">
      <h1></h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.0475682124597!2d-73.67064428451786!3d45.468845679101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9170c4c9c588b%3A0x4fa87f86c3a61b92!2s5792%20Avenue%20Parkhaven%2C%20C%C3%B4te%20Saint-Luc%2C%20QC%20H4W%201A6!5e0!3m2!1sen!2sca!4v1620353917832!5m2!1sen!2sca" 
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>514-984-5792</p>

      <h4>Email</h4>
      <p>gadou86@gmail.com</p>

      <h4>Address</h4>
      <p>Somewhere in Montreal</p>
  
    </div>
  )
}


export default Contact