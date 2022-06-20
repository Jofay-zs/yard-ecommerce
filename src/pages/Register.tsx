import React from 'react';

function Register() {
  return (
    <div className='login'>
      <div className='form-container'>
        <h1 className='title'>My account</h1>

        <form action='/' className='form'>
          <div>
            <label htmlFor='name' className='label'>
              Name
              <input
                type='text'
                id='name'
                placeholder='Teff'
                className='input input-name'
              />
            </label>

            <label htmlFor='email' className='label'>
              Email
              <input
                type='text'
                id='email'
                placeholder='platzi@example.com'
                className='input input-email'
              />
            </label>

            <label htmlFor='password' className='label'>
              Password
              <input
                type='password'
                id='password'
                placeholder='*********'
                className='input input-password'
              />
            </label>
          </div>

          <input
            type='submit'
            value='Create'
            className='primary-button login-button'
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
