import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';        

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		isAuth: state.auth.isAuth,
		userPhoto: state.auth.userPhoto 
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostTextCreator: (text) => {
			let action = (updateNewPostTextCreator(text));
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;