const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 6,
				message: state.newTextMessage
			};
			state.messages.push(newMessage);
			state.newTextMessage = '';
			return state;
		case UPDATE_NEW_TEXT_MESSAGE:
			state.newTextMessage = action.oneNewMessage;
			return state;
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