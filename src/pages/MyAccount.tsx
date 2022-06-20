import React from 'react';
import '../styles/pages/my-account.scss';

function Account() {
  return (
    <div className='login'>
      <div className='form-container'>
        <h1 className='title'>My account</h1>

        <form action='/' className='form'>
          <div>
            <div className='label'>Name</div>
            <p className='value'>Camila Yokoo</p>

            <div className='label'>Email</div>
            <p className='value'>camilayokoo@gmail.com</p>

            <div className='label'>Password</div>
            <p className='value'>*********</p>
          </div>

          <input
            type='submit'
            value='Edit'
            className='secondary-button login-button'
          />
        </form>
      </div>
    </div>
  );
}

export default Account;
