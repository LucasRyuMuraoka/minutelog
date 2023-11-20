import { UsersService } from "./users.service";

export class AuthService {

	usersService = new UsersService();

	isLogged() {
		return sessionStorage.getItem("token");
	}

	login(userCredentials) {
		return new Promise((resolve, reject) => {
			this.usersService.findAll().then(users => {
				let userExist = false;
				let loggedUser = "";
				
				users.forEach(user => {
					if(user.email === userCredentials.email && user.password === userCredentials.password) {
						userExist = true;
						loggedUser = user;
					}
				});

				if(userExist) {
					sessionStorage.setItem("token", loggedUser.id);
					resolve(loggedUser);
				} else {
					reject("Invalid credentials!");
				}
			}).catch(error => {
				reject(error);
			});
		})
	}
	
	handleLogout () {
		sessionStorage.clear();
		window.location.reload();
	}
	
}
