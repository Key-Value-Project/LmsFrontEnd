import "../assets/styles/homeLayout/home.style.scss";
import Logo from "../assets/images/kv-logo.png";
import Libicon from "../assets/icons/lib-icon.svg";
import Logout from "../assets/icons/logout.svg";
import icon1 from "../assets/icons/icon.svg";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const HomeLayout = () => {
  useEffect(() => {
    const session_token = localStorage.getItem("token");
    if (!session_token) {
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  const nav = useSelector((state) => state.navigation.value);

  const handleLinkClick = (link) => {
    dispatch(setFilter(link));
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
              <Link to="/employee" onClick={() => handleLinkClick("employee")}>
                <div
                  className={
                    nav === "employee" ? "nav-item active" : "nav-item"
                  }
                >
                  <span>
                    <img src={icon1} alt="Employee List icon" />
                  </span>
                  <p>Employee List</p>
                </div>
              </Link>

              <Link to="/library" onClick={() => handleLinkClick("library")}>
                <div
                  className={
                    nav === "library" ? "nav-item active" : "nav-item"
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
                onClick={() => handleLinkClick("profile")}
              >
                <div
                  className={
                    nav === "profile" ? "nav-item active" : "nav-item"
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
