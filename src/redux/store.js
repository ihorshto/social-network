import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
			dialogs: [
				{id: 1, name: "Ihor"},
				{id: 2, name: "Zenuk"},
				{id: 3, name: "Tolik"},
				{id: 4, name: "Masha"},
				{id: 5,	name: "Olga"}
			],
			messages: [
				{id: 1, message: "Hi"},
				{id: 2,	message: "Yo IT komasutra"},
				{id: 3, message: "Nice stuff"},
				{id: 4, message: "Woow coool man!"},
				{id: 5,	message: "Woow coool man!"},
			],
			newTextMessage: ""
		},
		sidebar: {
			userItems: [
				{id: 1, name: "Ihor"},
				{id: 2, name: "Zenuk"},
				{id: 3, name: "Tolik"}
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}



export default store;
window.state = store;