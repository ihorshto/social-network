import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import s from './Login.module.css';

const LoginForm = () => {
	return (
		<div>
			<Form>
				<div>
					<Field type={"text"} name={"email"} placeholder={"Enter email"} />
				</div>
				<ErrorMessage name={"email"} component="div" className={s.errorMessage} />
				<div>
					<Field type={"password"} name={"password"} placeholder={"Enter password"} />
				</div>
				<ErrorMessage name="password" component="div" className={s.errorMessage} />
				<div>
					<Field type={"checkbox"} name={"rememberMe"} />
					<label htmlFor={"rememberMe"}>remember me</label>
				</div>
				<button type={"submit"}>Log in</button>
			</Form>
		</div>
	)
}

const Login = () => {
	return (
		<div>
			<h1>Login</h1>
			<Formik
				initialValues={{ email: "", password: "", rememberMe: false }}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={loginFormSchema}
			>
				{() => (
					<LoginForm />
				)}
			</Formik>
		</div>
	)
};


export default Login;
