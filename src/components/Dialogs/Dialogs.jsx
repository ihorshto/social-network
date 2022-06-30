import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field } from "formik";

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
  let addNewMessage = (values) => {
    props.sendMessage(values.newTextMessage);
  }

  return (
    <Formik initialValues={{ newTextMessage: "" }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values);
        console.log(values);
        resetForm({ values: '' });
      }}
    >
      {() => (
        <Form>
          <div>
            <Field name={'newTextMessage'} type={'textarea'} placeholder={'enter text'} />
          </div>
          <button type={'submit'}>Send</button>
        </Form>
      )}
    </Formik>
  )
}

export default Dialogs;