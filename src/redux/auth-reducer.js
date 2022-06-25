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
				...action.data,
				isAuth: true
			}
		}

		default:
			return state;
	}
}


export const setAuthUserData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: {userId, email, login}
})



export default authReducer;