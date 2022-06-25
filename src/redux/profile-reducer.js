const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
	newPostText: "",
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
					id: 5,
					message: state.newPostText,
					likesCount: 0,
			}
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost]
			}
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		default:
			return state;
	}
}

export const addPostCreator = () => ({
	type: ADD_POST
})
export const updateNewPostTextCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text
})
export const setUserProfile = (profile) => ({
	type: SET_USER_PROFILE,
	profile
})



export default profileReducer;