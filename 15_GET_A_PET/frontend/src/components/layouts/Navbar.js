import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import styles from "./Navbar.module.css";

import { Context } from "../../context/UserContext";
import { useContext } from "react";

function Navbar() {
	const { authenticated, logout } = useContext(Context);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_logo}>
				<img src={Logo}></img>
			</div>
			<ul>
				<li>
					<Link to={"/"}>Adopter</Link>
				</li>
				{authenticated ? (
					<>
						<li>
							<Link to={"/user/profile"}>Perfil</Link>
						</li>
						<li onClick={logout}>Exit</li>
					</>
				) : (
					<>
						<li>
							<Link to={"/login"}>Login</Link>
						</li>
						<li>
							<Link to={"/register"}>Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
