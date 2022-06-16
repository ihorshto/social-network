let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi! What's is your name?", likesCount: 12 },
				{ id: 2, message: "Hello my name is Ihor!", likesCount: 1 },
				{ id: 3, message: "What's up man?", likesCount: 46 },
				{ id: 4, message: "Yeahhh goood!!!", likesCount: 57 }
			],
			newPostText: ""
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: "Ihor" },
				{ id: 2, name: "Zenuk" },
				{ id: 3, name: "Tolik" },
				{ id: 4, name: "Masha" },
				{ id: 5, name: "Olga" }
			],
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "Yo IT komasutra" },
				{ id: 3, message: "Nice stuff" },
				{ id: 4, message: "Woow coool man!" },
				{ id: 5, message: "Woow coool man!" },
			],
			newTextMessage: ""
		},
		sidebar: {
			userItems: [
				{ id: 1, name: "Ihor" },
				{ id: 2, name: "Zenuk" },
				{ id: 3, name: "Tolik" }
			]
		}
	},
	getState () {
		return this._state;
	},
	_callSubscriber () {
		console.log("State changed");
	},
	addPost () {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	addMessage () {
		let newMessage = {
			id: 6,
			message: this._state.dialogsPage.newTextMessage
		};
		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newTextMessage = '';
		this._callSubscriber(this._state);
	},
	updateNewTextMessage (oneNewMessage) {
		this._state.dialogsPage.newTextMessage = oneNewMessage;
		this._callSubscriber(this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	}
}



export default store;
window.state = store;