import {
	headerAPI, userAPI
} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	userPhoto: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			}
		}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: {
		userId,
		email,
		login,
		isAuth
	}
})

export const getAuthUserData = () =>  (dispatch) => {
		return headerAPI.authMe().then(data => {
			if (data.resultCode === 0) {
				let {
					id,
					email,
					login
				} = data.data;
				dispatch(setAuthUserData(id, email, login, true));
			}
		});
	}

export const login = (email, password, rememberMe, setFieldValue) => (dispatch) => {
		userAPI.login(email, password, rememberMe)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(getAuthUserData());
				} else {
								setFieldValue("general", response.data.messages.join(" "))
				}
			});
	}

	export const logout = () => (dispatch) => {
		userAPI.logout()
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false));
				}
			});
	}



export default authReducer;