const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			let stateCopy = {...state};
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost)
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = {...state};
			stateCopy.newPostText = action.newText;
			return stateCopy;
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



export default profileReducer;