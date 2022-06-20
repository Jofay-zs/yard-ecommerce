import React, { useRef } from 'react';
import '../styles/pages/login.scss';
import { Link } from 'react-router-dom';
import loginLogo from '../assets/menu.png';

function Login() {
  const formRef = useRef(null); // <HTMLFormElement>

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!formRef.current) throw Error('divRef is not assigned');

    const formData = new FormData(formRef.current);
    const data = {
      usename: formData.get('email'),
      password: formData.get('password'),
    };

    return data;
  };

  return (
    <div className='login'>
      <div className='form-container'>
        {/* <img src={loginLogo} alt="logo" className="logo" /> */}
        <section className='form-container-header'>
          <img
            src={loginLogo}
            alt='YARD-Sale'
            className='form-container-header-logo'
          />
          <div className='form-container-header-title'>
            <span>YARD </span>
            <span> Sale</span>
          </div>
        </section>
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor='email' className='label'>
            Email address
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              className='input input-email'
            />
          </label>

          <label htmlFor='password' className='label'>
            Password
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='input input-password'
            />
          </label>

          <button type='submit' className='primary-button login-button'>
            Log in
          </button>
          <Link to='/recovery-password'>Forgot my password</Link>
          <Link to='/register' className='secondary-button signup-button'>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
