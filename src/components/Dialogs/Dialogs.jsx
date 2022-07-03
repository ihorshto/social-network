import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  if (!props.isAuth) return <Navigate to="/login" />

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <AddMassageForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  )
}

const AddMassageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newTextMessage: ""
    },
    validationSchema: Yup.object({
      newTextMessage: Yup.string()
        .required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      addNewMessage(values);
      console.log(values);
      resetForm(values.newTextMessage = "")
    }
  })
  let addNewMessage = (values) => {
    props.sendMessage(values.newTextMessage);
  }

  return (
    <Formik >
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <Field name={'newTextMessage'} type={"textarea"} placeholder={'Enter text'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newTextMessage}
          />
        </div>
        {
          formik.touched.newTextMessage && formik.errors.newTextMessage
            ? <button type={'submit'} disabled={true}>Send</button>
            : <button type={'submit'} disabled={false}>Send</button>
        }
      </Form>
    </Formik>
  )
}

export default Dialogs;