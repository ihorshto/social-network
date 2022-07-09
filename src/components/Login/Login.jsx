import React, { useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values, { setFieldValue }) => {
      props.login(
        values.email,
        values.password,
        values.rememberMe,
        setFieldValue
      );
      console.log(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
  });
  return (
    <div>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <Field
              type={"email"}
              name={"email"}
              placeholder={"Enter email"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <p className={s.error}>Required</p>
          ) : null}
          <div>
            <Field
              type={"password"}
              name={"password"}
              placeholder={"Enter password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.errors.password && formik.touched.password ? (
            <p className={s.error}>Required</p>
          ) : null}
          <div>
            {formik.values.general ? (
              <span className={s.incorrectError}>{formik.values.general}</span>
            ) : null}
          </div>
          <div>
            <Field
              type="checkbox"
              name={"rememberMe"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.rememberMe}
            />
            <label htmlFor={"rememberMe"}>remember me</label>
          </div>
          <button type={"submit"}>Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={props.login} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
