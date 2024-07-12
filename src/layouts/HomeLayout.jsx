import "../assets/styles/homeLayout/home.style.css"
import Logo from "../assets/images/kv-logo.png";
import Logout from "../assets/icons/logout.svg";
import icon1 from "../assets/icons/icon.svg";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const HomeLayout = () => {
	useEffect(() => {
		const session = localStorage.getItem("sessionKey");
		if (!session) {
			navigate("/");
		}
	});

	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("username");
		localStorage.removeItem("password");

		navigate("/");
	};

	return (
		<>
			<header>
				<img src={Logo} alt="Key value software systems logo" />
				<div className="logout" onClick={logout}>
					<img src={Logout} alt="Logout" />
				</div>
			</header>

			<div className="webapp">
				<aside>
					<nav>
						<a href="">
							<Link to="/employee">
								<div>
									<img src={icon1} alt="Employee List icon" />
									<p>Employee List</p>
								</div>
							</Link>
							<Link to="/employee/create">
								<div>
									<img src={icon1} alt="Employee create icon" />
									<p>Add Employee</p>
								</div>
							</Link>
						</a>
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
