import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*components*/
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Container from "./components/layouts/Container";
import Message from "./components/layouts/Message";

import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/User/Profile";

/*Context*/
import { UserProvider } from "./context/UserContext";

function App() {
	return (
		<Router>
			<UserProvider>
				<Navbar />
				<Message />
				<Container>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/user/profile" element={<Profile />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</Container>
				<Footer />
			</UserProvider>
		</Router>
	);
}

export default App;
