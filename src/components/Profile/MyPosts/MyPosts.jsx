import React from 'react';
import Post from './Post/Post';
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import s from './MyPosts.module.css';

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
	const formik = useFormik({
		initialValues: {
			newPostText: ""
		},
		validationSchema: Yup.object({
			newPostText: Yup.string()
				.required("Required")
		}),
		onSubmit: (values, {resetForm}) => {
			addPostText(values);
			console.log(values);
			resetForm(values.newPostText = "")
		}
	})



	let addPostText = (values) => {
		props.addPost(values.newPostText);
	}
	return (
		<Formik>
			<Form onSubmit={formik.handleSubmit}>
				<div>
					<Field name={'newPostText'} type={"textarea"} placeholder={'Enter text'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.newPostText}
					/>
				</div>
				{
					formik.touched.newPostText && formik.errors.newPostText
					? <button type={'submit'} disabled={true}>Send</button>
					: <button type={'submit'} disabled={false}>Send</button>
				}
			</Form>
		</Formik>
	)
}

export default MyPosts;