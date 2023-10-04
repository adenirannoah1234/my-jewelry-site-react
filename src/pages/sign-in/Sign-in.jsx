import { useState } from 'react';
import Images from '../../assets/images/diamond logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleUserLogin(e) {
    e.preventDefault();
    if (!userName || !password) {
      setError('Please fill in all fields!');
      setTimeout(() => {
        setError('');
      }, 5000);
    } else {
      localStorage.setItem('user', JSON.stringify(userName));
      navigate('/dashboard');
    }
  }

  return (
    <form className="log-in" onSubmit={handleUserLogin}>
      <a href="#">
        <img src={Images} alt="" />
      </a>
      <h3 className="sign3">Sign in</h3>
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
          type="text"
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
      </div>
      <p className="question2">
        Donn't have an account?
        <Link to="/register">Create one</Link>
      </p>
      <button>Login</button>
    </form>
  );
};

export default Signin;
