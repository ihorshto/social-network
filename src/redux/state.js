import {rerenderEntireTree} from '../render';

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi! What's is your name?", likesCount: 12 },
			{ id: 2, message: "Hello my name is Ihor!", likesCount: 1 },
			{ id: 3, message: "What's up man?", likesCount: 46 },
			{ id: 4, message: "Yeahhh goood!!!", likesCount: 57 }
		]
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
	},
	sidebar: {
				userItems: [
    { id: 1, name: "Ihor" },
    { id: 2, name: "Zenuk" },
    { id: 3, name: "Tolik" }
  ]
	}
}

 export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
} 

 export let addMessage = (publishMessage) => {
 	let newMessage = {
 		id: 6,
 		message: publishMessage
 	};
 	state.dialogsPage.messages.push(newMessage);
 	rerenderEntireTree(state);
 }



export default state;