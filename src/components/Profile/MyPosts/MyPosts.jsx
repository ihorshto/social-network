import { Formik, Form, Field } from "formik";
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div className={s.postsBlockContent}>
				<div className={s.userPhoto}>
					{props.isAuth ? <img src={props.userPhoto} /> : ""}
				</div>
				<MyPostsForm addPost={props.addPost} />
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}

const MyPostsForm = (props) => {
	let addPostText = (values) => {
		props.addPost(values.newPostText);
	}

	return (
		<Formik initialValues={{ newPostText: "" }}
			onSubmit={(values, { resetForm }) => {
				addPostText(values);
				console.log(values);
				resetForm({ values: '' });
			}}
		>
			{() => (
				<Form>
					<div>
						<Field name={'newPostText'} type={'textarea'} placeholder={'enter text'} />
					</div>
					<button type={'submit'}>Send</button>
				</Form>
			)}
		</Formik>
	)
}

export default MyPosts;