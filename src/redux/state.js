const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
			dialogs: [{
					id: 1,
					name: "Ihor"
				},
				{
					id: 2,
					name: "Zenuk"
				},
				{
					id: 3,
					name: "Tolik"
				},
				{
					id: 4,
					name: "Masha"
				},
				{
					id: 5,
					name: "Olga"
				}
			],
			messages: [{
					id: 1,
					message: "Hi"
				},
				{
					id: 2,
					message: "Yo IT komasutra"
				},
				{
					id: 3,
					message: "Nice stuff"
				},
				{
					id: 4,
					message: "Woow coool man!"
				},
				{
					id: 5,
					message: "Woow coool man!"
				},
			],
			newTextMessage: ""
		},
		sidebar: {
			userItems: [{
					id: 1,
					name: "Ihor"
				},
				{
					id: 2,
					name: "Zenuk"
				},
				{
					id: 3,
					name: "Tolik"
				}
			]
		}
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 6,
				message: this._state.dialogsPage.newTextMessage
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newTextMessage = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_TEXT_MESSAGE) {
					this._state.dialogsPage.newTextMessage = action.oneNewMessage;
					this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT,
		newText: text
})
export const addMessageActionCreator = () =>  ({type: ADD_MESSAGE})
export const updateNewTextMessageActionCreator = (message) => ({
		type: UPDATE_NEW_TEXT_MESSAGE,
		oneNewMessage: message
})



export default store;
window.state = store;