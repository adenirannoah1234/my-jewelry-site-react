import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboards = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  }, []);

  return (
    <div className="container">
      <div className="revenue1">
        <div className="revenue2">
          <p>Annual Revenue</p>
          <h3>$20 Billion</h3>
        </div>
        <p className="icon1">
          <i class="ri-money-dollar-circle-line"></i>
        </p>
      </div>
      <div className="revenue1">
        <div className="revenue2">
          <p>Monthly Revenue</p>
          <h3>$2 Billion</h3>
        </div>
        <p className="icon1">
          <i class="ri-money-dollar-circle-line"></i>
        </p>
      </div>
      <div className="revenue1">
        <div className="revenue2">
          <p>Total Jewelries</p>
          <h3>5,000</h3>
        </div>
        <p className="icon1">
          <i class="ri-numbers-line"></i>
        </p>
      </div>
      <div className="revenue1">
        <div className="revenue2">
          <p>Total Sold</p>
          <h3>3,800</h3>
        </div>
        <p className="icon1">
          <i class="ri-line-chart-line"></i>
        </p>
      </div>
    </div>
  );
};

export default Dashboards;
