import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [{
			id: 1,
			message: "Hi! What's is your name?",
			likesCount: 12
		},
		{
			id: 2,
			message: "Hello my name is Ihor!",
			likesCount: 1
		},
		{
			id: 3,
			message: "What's up man?",
			likesCount: 46
		},
		{
			id: 4,
			message: "Yeahhh goood!!!",
			likesCount: 57
		}
	],
	profile: null,
	status: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost]
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case DELETE_POST: {
			return {...state, posts: state.posts.filter(p => p.id !== action.postId) }}

		default:
			return state;
	}
}

export const addPostCreator = (newPostText) => ({
	type: ADD_POST,
	newPostText
})
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
})
export const setStatus = (status) => ({
	type: SET_STATUS,
	status
})
export const deletePost = (postId) => ({
	type: DELETE_POST,
	postId
})

export const getUserProfile = (userId) => async (dispatch) => {
		let response = await profileAPI.getProfile(userId)
		dispatch(setUserProfile(response.data));
	}


export const getStatus = (userId) => async (dispatch) => {
	let response = await	profileAPI.getStatus(userId)
	dispatch(setStatus(response.data));
	}


export const updateStatus = (status) => async (dispatch) => {
	let response = await	profileAPI.updateStatus(status)

	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}





export default profileReducer;