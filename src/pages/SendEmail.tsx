import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/send-email.scss';

function SendEmail() {
  return (
    <div className='send-email'>
      <div className='form-container'>
        <img src='./logos/logo_yard_sale.svg' alt='logo' className='logo' />
        <h1 className='title'>Email has been sent!</h1>
        <p className='subtitle'>
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className='email-image'>
          <img src='./icons/email.svg' alt='email' />
        </div>
        <button type='button' className='primary-button login-button'>
          <Link to='/login'>Login</Link>
        </button>
        <p className='resend'>
          <span>Didn&apos;t receive the email?</span>
          <a href='/'>Resend</a>
        </p>
      </div>
    </div>
  );
}

export default SendEmail;
