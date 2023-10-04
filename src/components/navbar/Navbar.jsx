import { useEffect, useState } from 'react';
import Logo from '../../assets/images/diamond logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userDropDown, setUserDropDown] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  function handleUserLogout() {
    console.log('hello world');
  }

  return (
    <div className="nav">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      {user && <p>Welcome,{user}</p>}

      <ul className="list">
        <li className="gallery">
          <a href="/">Our gallery</a>
        </li>
        {user ? (
          <p className="iconl" style={{ fontSize: '20px' }}>
            <i
              onClick={() => setUserDropDown(!userDropDown)}
              class="ri-user-3-line"
            ></i>
            {userDropDown && (
              <p
                onClick={() => {
                  localStorage.clear();
                  navigate('/');
                }}
                className="logout"
              >
                <a href="">Logout</a>
                <i class="ri-logout-circle-line"></i>
              </p>
            )}
          </p>
        ) : (
          <li className="sign">
            <Link to="login">Sign in</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
