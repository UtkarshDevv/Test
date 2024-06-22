
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import "..pages/../CSS/ContactPage.css"
import Navebar from '../Navbar/Navebar';
import Homepage from './Homepage';
import Footer from '../Footer/Footer';



const ContactPage = () => {
    return (
      <div className="contact-page">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <div className="contact-info">
            <p>
              For quick inquiries, contact us via WhatsApp:{' '}
              <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
                Open WhatsApp
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  };
  
  export default ContactPage;
