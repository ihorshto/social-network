import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";


const LoginForm = () => {
return	<div>
		<Form>
			<div>
				<Field type={'text'} name={'email'} placeholder={'e-mail'} />
			</div>
			<ErrorMessage name="email" component="div" />
			<div>
				<Field type={'password'} name={'password'} placeholder={'password'} />
			</div>
			<ErrorMessage name="password" component="div" />
			<div>
				<Field type={'checkbox'} name={'rememberMe'} />
				<label htmlFor={'rememberMe'}> remember me </label>
			</div>
			<button type={'submit'}>Log in</button>
		</Form>
	</div>
};

const Login = () => {
	return (
	<div>
		<h1>Login</h1>
		<Formik
			initialValues={{ email: "", password: "", rememberMe: false }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Required';
				}
				return errors;
			}}
			onSubmit={(values) => {
				console.log(values)
			}}
			validationSchema={loginFormSchema}>
			{() => (
				<LoginForm/>
			)}
		</Formik>
	</div>
)};


export default Login;
