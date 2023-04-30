import React, { useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../utils/context/userAuthcontext'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const { logIn , signInhgoogle} = useUserAuth();
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror('')
    try {
      await logIn(email, password)
      navigate("/")
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterror(errorMessage)
      console.log(errorCode, errorMessage)
    };
  };

  const handleGooglesignIn = async (e) => {
    e.preventDefault()
    try {
      await signInhgoogle();
      navigate("/");
    } catch (err) {
      seterror(err.message);
      console.log(err.message);
      console.log(err)
    }
  };

  return (
    <form className="container " onSubmit={handleSubmit}>
      <h3>auth Login</h3>
      <p style={{color:'red'}}>{error}</p>

      <input label='Email address' type='email' placeholder='username'
        value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }}
      />
      <input label='Password' type='password' placeholder='password'
        value={password}
        onChange={(e) => {
          setpassword(e.target.value)
        }}
      />

      <button type='submit'> Login </button>

      <div className="signup_box">
        <p>Not a member? <Link to="/signup">Signup</Link></p>
        <p>or sign up with</p>

        <div className='googlebtn ' >
          <GoogleButton type='dark' onClick={handleGooglesignIn}/>
        </div>
      </div>

    </form>
  );
}

export default Login;