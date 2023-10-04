import React from 'react';
import Images from '../../assets/images/background image.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="home">
      <div className="left-body">
        <h1 className="bg-text">Lorem ipsum dolor sit</h1>
        <p className="paragraph1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor ex
          totam cupiditate voluptatibus unde.
        </p>
        <div className="button-group">
          {user ? (
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          ) : (
            <div>
              <button onClick={() => navigate('/login')} className="sign-in">
                Sign in
              </button>
              <button onClick={() => navigate('/register')} className="started">
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
      <img src={Images} alt="" />
    </div>
  );
};

export default Home;