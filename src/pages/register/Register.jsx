import React from 'react';
import Images from '../../assets/images/diamond logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate('');

  function handleUserRegister(e) {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!userName || !password || !email || !confirmPassword) {
      setError('Please fill in all fields!');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else if (!passwordRegex.test(password)) {
      setError(
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It must be at least 8 characters long.'
      );
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      localStorage.setItem('user', JSON.stringify(userName));
      navigate('/dashboard');
    }
  }

  return (
    <form className="register" onSubmit={handleUserRegister}>
      <a href="#">
        <img src={Images} alt="" />
      </a>
      <h3 className="sign3">Sign up</h3>

      {error && (
        <p
          style={{
            backgroundColor: 'red',
            padding: '5px',
            textAlign: 'center',
            color: 'white',
            marginTop: '5px',
          }}
        >
          {error}
        </p>
      )}

      <div className="form-group">
        <input
          type="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="Email"
        />
        <input
          type="username"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          className="username"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="password"
        />
        <input
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>
      <p className="question">
        Already have an account?
        <Link to="/login">Sign in</Link>
      </p>
      <button>Sign up</button>
    </form>
  );
};

export default Services;
