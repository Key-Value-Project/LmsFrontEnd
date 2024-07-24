import '../assets/styles/homeLayout/home.style.scss';
import Logo from '../assets/images/kv-logo.png';
import Libicon from '../assets/icons/lib-icon.svg';
import Logout from '../assets/icons/logout.svg';
import icon1 from '../assets/icons/icon.svg';
import Profile from '../assets/icons/profile.svg';
import Return from '../assets/icons/return.svg';
import Shelf from '../assets/icons/shelf.svg';
import Insights from '../assets/icons/insights.svg';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const HomeLayout = () => {
  const location = useLocation(); // React Hook
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const session_token = localStorage.getItem('token');
    if (!session_token) {
      navigate('/');
    }
    try {
      if (session_token.split('.').length !== 3) {
        throw new Error('Invalid token format');
      }
      const decodedToken = jwtDecode(session_token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        navigate('/');
      }
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <header>
        <a href="https://www.keyvalue.systems/" target="_blank" rel="noopener noreferrer">
          <img src={Logo} alt="Key value software systems logo" />
        </a>

        <div className="logout" onClick={logout}>
          <img src={Logout} alt="Logout" />
        </div>
      </header>

      <div className="webapp">
        <aside>
          <nav>
            <div>
              <Link to="/employee">
                <div className={location.pathname.includes('employee') && !location.pathname.includes('profile') ? 'nav-item active' : 'nav-item'}>
                  <span>
                    <img src={icon1} alt="Employee List icon" />
                  </span>
                  <p>Employee</p>
                </div>
              </Link>

              <Link to="/library">
                <div className={location.pathname.includes('library') ? 'nav-item active' : 'nav-item'}>
                  <span>
                    <img src={Libicon} alt="Employee List icon" />
                  </span>
                  <p>Library</p>
                </div>
              </Link>

              {location.pathname.includes('library') ? (
                <div className="aside__opt">
                  <Link to="borrow">
                    <div className={location.pathname.includes('borrow') ? 'nav-item active' : 'nav-item'}>
                      <span>
                        <img src={Return} alt="Return Books icon" />
                      </span>
                      <p>Return</p>
                    </div>
                  </Link>
                  <Link to="shelf">
                    <div className={location.pathname.includes('shelf') ? 'nav-item active' : 'nav-item'}>
                      <span>
                        <img src={Shelf} alt="View Shelf icon" />
                      </span>
                      <p>Shelves</p>
                    </div>
                  </Link>
                  <Link to="insights">
                    <div className={location.pathname.includes('insights') ? 'nav-item active' : 'nav-item'}>
                      <span>
                        <img src={Insights} alt="View Shelf icon" />
                      </span>
                      <p>Insights</p>
                    </div>
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div>
              <Link to="/employee/profile">
                <div className={location.pathname.includes('profile') ? 'nav-item active' : 'nav-item'}>
                  <span>
                    <img src={Profile} alt="Profile icon" />
                  </span>
                  <p>Profile</p>
                </div>
              </Link>
            </div>
          </nav>
        </aside>
        <main>
          {' '}
          <Outlet />{' '}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
