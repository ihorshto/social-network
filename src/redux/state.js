import {rerenderEntireTree} from '../render';

let state = {
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
}

window.state = state;

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
} 

export let updateNewPostText = (newText) => {
 state.profilePage.newPostText = newText;
 rerenderEntireTree(state);
}


export let addMessage = () => {
 let newMessage = {
 	id: 6,
 	message: state.dialogsPage.newTextMessage
 };
 state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newTextMessage = '';
 rerenderEntireTree(state);
}
export let updateNewTextMessage = (oneNewMessage) => {
	state.dialogsPage.newTextMessage = oneNewMessage;
	rerenderEntireTree(state);
}



export default state;