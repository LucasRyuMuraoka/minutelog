import { backend } from "./api.axios";

export class UsersService {
	
	findAll() {
		return new Promise((resolve, reject) => {
			backend.get("/users").then(data => {
				resolve(data.data);
			}).catch(error => reject(error));
		})
	}

	findById(id) {
		return new Promise((resolve, reject) => {
			backend.get(`/users/${id}`).then(data => {
				resolve(data.data);
			}).catch(error => reject(error));
		})
	}

	update(id, updatedUser) {
		return new Promise((resolve, reject) => {
			backend.put(`/users/${id}`, updatedUser).then(() => {
				resolve();
			}).catch(() => reject());
		})
	}

	delete(id) {
		return new Promise((resolve, reject) => {
			backend.delete(`/users/${id}`).then(() => {
				sessionStorage.clear();
				resolve();
			}).catch(error => reject(error));
		})
	}

}
