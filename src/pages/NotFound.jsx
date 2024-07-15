import { Link } from "react-router-dom";
import "../assets/styles/notFound/notfound.scss";

const NotFound = () => {
	return (
		<section className="not-found">
			<img src="/favicon.ico" alt="404" />
			<div className="container">
				<div className="hero">
					<h1>404 Not Found</h1>
					<div className="content-box">
						<h2>Looks like you&apos;re lost</h2>
						<p>The page you are looking for is not available!</p>
						<Link to="/" className="home-link">
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
