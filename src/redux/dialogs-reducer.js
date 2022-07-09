const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
			]
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = action.newTextMessage;
			
			return {
				...state,
				messages: [...state.messages, {id: 6, message:newMessage}]
			};
		}
		default:
			return state;
	}
}

export const sendMessageCreator = (newTextMessage) => ({
	type: ADD_MESSAGE,
	newTextMessage
})

export default dialogsReducer;