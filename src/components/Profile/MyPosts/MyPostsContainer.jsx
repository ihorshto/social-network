import React from 'react';
import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


// const MyPostsContainer = () => {

// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let state = store.getState();
// 					let onAddPost = () => {
// 						store.dispatch(addPostCreator());
// 					}

// 					let onPostChange = (text) => {
// 						let action = (updateNewPostTextCreator(text));
// 						store.dispatch(action);
// 					}

// 					return <MyPosts updateNewPostTextCreator={onPostChange}
// 						addPost={onAddPost}
// 						posts={state.profilePage.posts}
// 						newPostText={state.profilePage.newPostText} />
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
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