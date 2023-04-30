import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useUserAuth } from '../utils/context/userAuthcontext'; 
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')

  const { signUp } = useUserAuth();
const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await signUp(email, password);
      navigate("/login")
    } catch (err) {
      seterror(err.message);
    }
  }

  return (
    <form className="container " onSubmit={handlesubmit}>
      <h3>auth signup</h3>
      <p style={{color:'red'}}>{error}</p>
      <input label='Email address' type='email' placeholder='username'
        value={email}
        onChange={(e) => {
          setemail(e.target.value)
        }} />
      <input label='Password' type='password' placeholder='password'
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }} />

      <button >Sign up</button>

      <div className="signup_box">
        <p>or </p>
        <p>already a member?<Link to="/login"> Login</Link> </p>

      </div>

    </form>
  );
}

export default Signup;