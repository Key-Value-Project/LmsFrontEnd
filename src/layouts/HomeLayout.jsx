import "../assets/styles/homeLayout/home.style.scss";
import Logo from "../assets/images/kv-logo.png";
import Libicon from "../assets/icons/lib-icon.svg";
import Addicon from "../assets/icons/add-icon.svg";
import Logout from "../assets/icons/logout.svg";
import icon1 from "../assets/icons/icon.svg";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const HomeLayout = () => {
  useEffect(() => {
    const session_token = localStorage.getItem("token");
    if (!session_token) {
      navigate("/");
    }
  }, []);
  const [activeLink, setActiveLink] = useState("/employee");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header>
        <a
          href="https://www.keyvalue.systems/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
              <Link to="/employee" onClick={() => handleLinkClick("/employee")}>
                <div
                  className={
                    activeLink === "/employee" ? "nav-item active" : "nav-item"
                  }
                >
                  <span>
                    <img src={icon1} alt="Employee List icon" />
                  </span>
                  <p>Employee List</p>
                </div>
              </Link>

              <Link to="/library" onClick={() => handleLinkClick("/library")}>
                <div
                  className={
                    activeLink === "/library" ? "nav-item active" : "nav-item"
                  }
                >
                  <span>
                    <img src={Libicon} alt="Employee List icon" />
                  </span>
                  <p>Library</p>
                </div>
              </Link>
            </div>
            <div>
              <Link
                to="/employee/profile"
                onClick={() => handleLinkClick("/employee/profile")}
              >
                <div
                  className={
                    activeLink === "/employee/profile"
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <span>
                    <img src={icon1} alt="Profile icon" />
                  </span>
                  <p>Profile</p>
                </div>
              </Link>
            </div>
          </nav>
        </aside>
        <main>
          {" "}
          <Outlet />{" "}
        </main>
      </div>
    </>
  );
};

export default HomeLayout;
