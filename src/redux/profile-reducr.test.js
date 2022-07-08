import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";
import '@testing-library/jest-dom/extend-expect';

	let state = {
	posts: [
		{id: 1, message: "Hi! What's is your name?", likesCount: 12},
		{id: 2,message: "Hello my name is Ihor!",likesCount: 1},
		{id: 3,message: "What's up man?",likesCount: 46},
		{id: 4,message: "Yeahhh goood!!!",likesCount: 57}
	]
}

test('new post should be added', () => {
	let action = addPostCreator("It-samurai"); 
	let NewState = profileReducer(state, action);

	expect(NewState.posts.length).toBe(5);
});

test('new post message should be correct', () => {
	let action = addPostCreator("It-samurai"); 
	let NewState = profileReducer(state, action);

	expect(NewState.posts[4].message).toBe("It-samurai");
});

test('after delenting length of messages should be decrement', () => {
	let action = deletePost(1);
	let NewState = profileReducer(state, action);

	expect(NewState.posts.length).toBe(3);
});

test(`after delenting, length shouldn't be decrement if id is incorrect`, () => {
	let action = deletePost(1000);
	let NewState = profileReducer(state, action);

	expect(NewState.posts.length).toBe(4);
}); 
