import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "136cda55-4975-44f8-a8df-7262ef382550"
	}
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
			.then(response => {
				return response.data;
			});
	}
}