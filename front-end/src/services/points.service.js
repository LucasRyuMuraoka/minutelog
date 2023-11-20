import { backend } from "./api.axios";

export class PointsService {
	
	findByUserId(id) {
		return new Promise((resolve, reject) => {
			backend.get(`/points/${id}`).then(data => {
				resolve(data.data);
			}).catch(error => {
				reject(error);
			})
		});
	}

	findLastPointById(id) {
		return new Promise((resolve, reject) => {
			this.findByUserId(id).then(data => {
				if (data.length > 0) {
					const lastPoint = data[data.length - 1];
					resolve(lastPoint);
				} else {
					reject();
				}
			}).catch(error => {
				reject(error);
			});
		})
	}

	newPoint(userId) {
		return new Promise((resolve, reject) => {
			backend.post(`/points/${userId}`).then(() => {
				resolve()
			}).catch(error => {
				reject(error);
			})
		});
	}

}
