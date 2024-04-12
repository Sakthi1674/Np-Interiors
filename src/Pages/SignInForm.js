import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './SignInForm.css';

export default function SignInForm() {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/SignInForm', {
        name,
        email,
        password,
      })
        .then(res => {
          if (res.data === 'exist') {
            alert('User already exists');
          } else if (res.data === 'notexist') {
            history('/working', { state: { id: name } });
          }
        })
        .catch(e => {
          alert('Check your Details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='SignInFormback'>
      <div className='login'>
        <h1>SignUp</h1>

        <form action='POST'>
          <input type='name' onChange={(e) => { setName(e.target.value) }} placeholder='Enter name' name='' id='' />
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' name='' id='' />
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter password' name='' id='' />
          <input type="submit" onClick={submit} value="SignUp" />
        </form>

        <br />
        <p>Already have an account?</p>
        <Link to="/login">Login Page</Link>
      </div>
    </div>
  );
}
