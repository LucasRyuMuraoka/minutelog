import { useNavigate } from "react-router-dom";

export class AuthService {
	
	navigate = useNavigate("/");

	isLogged() {
		return sessionStorage.getItem("token");
	}
	
	handleLogout () {
		sessionStorage.clear();
		window.location.reload();
	}
	
}
