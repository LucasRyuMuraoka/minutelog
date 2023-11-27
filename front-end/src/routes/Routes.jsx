import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { History } from "../pages/history";
import { Profile } from "../pages/profile/Profile";
import { Error } from "../pages/error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../pages/signup";

const AppRoutes = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/"/>
				<Route element={<Login />} path="/login"/>
				<Route element={<Signup />} path="/signup"/>
				<Route element={<History />} path="/history"/>
				<Route element={<Profile />} path="/profile"/>
				<Route element={<Error />} path="/*"/>
			</Routes>
		</BrowserRouter>
	);
}

export { AppRoutes };
