import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "136cda55-4975-44f8-a8df-7262ef382550"
	}
});

export const userAPI = {
	getUsers(currentPage = 2, pageSize = 10) {
			debugger;
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data;
			});
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data;
			});
	}
}

export const headerAPI = {
	authMe() {
		return instance.get(`auth/me`).then(response => {
			return response.data;
		})
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId).then(response => {
			return response.data;
		});
	}
}