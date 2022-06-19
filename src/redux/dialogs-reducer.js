const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

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
			],
			newTextMessage: ""
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = state.newTextMessage;
			
			return {
				...state,
				newTextMessage: '',
				messages: [...state.messages, {id: 6, message:newMessage}]
			};
		}
		case UPDATE_NEW_TEXT_MESSAGE: {
			return {
				...state,
				newTextMessage: action.oneNewMessage
			}
		}
		default:
			return state;
	}
}

export const addMessageCreator = () => ({
	type: ADD_MESSAGE
})
export const updateNewTextMessageCreator = (NewMessageBody) => ({
	type: UPDATE_NEW_TEXT_MESSAGE,
	oneNewMessage: NewMessageBody
})

export default dialogsReducer;