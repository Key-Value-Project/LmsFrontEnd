import "../assets/styles/homeLayout/home.style.scss";
import Logo from "../assets/images/kv-logo.png";
import Logout from "../assets/icons/logout.svg";
import icon1 from "../assets/icons/icon.svg";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const HomeLayout = () => {
	useEffect(() => {
		const session_token = localStorage.getItem("token");
		if (!session_token) {
			navigate("/");
		}
	});

	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("token");
		navigate("/");
	};

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
								<div className="nav-item">
									<img src={icon1} alt="Employee List icon" />
									<p>Employee List</p>
								</div>
							</Link>
							<Link to="/employee/create">
								<div className="nav-item">
									<img src={icon1} alt="Employee create icon" />
									<p>Add Employee</p>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/employee/profile">
								<div className="nav-item">
									<img src={icon1} alt="Profile icon" />
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
