import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { sameAs } from "helpers/validators";
import Error from 'components/shared/FormError';

const RegisterForm = ({onSubmit}) => {

  const { handleSubmit, register, errors , getValues} = useForm();

  //eslint-disable-next-line
  const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
        name="username"
        type="text" 
        className="form-control" 
        id="username"  
        ref={register({required: "Username is required"})}/>
        <ErrorMessage as={<Error />} name="username" errors={errors}>
        {message => <p> { message } </p> }
        </ErrorMessage>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
        name="email"
        type="email" 
        className="form-control" 
        id="email"
        ref={register({
          required: "Email is required", 
          pattern: {value: EMAIL_PATTERN, message: "Incorrect email format"}})} 
        />
        <ErrorMessage as={<Error />} name="email" errors={errors}>
        {message => <p> { message } </p> }
        </ErrorMessage>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
        name="password" 
        type="password" 
        className="form-control" 
        id="password" 
        ref={register({
          required:"Password is required", 
          minLength: {value: 8, message: "Minimum password length is 8 characters long"}})}
        />
        <ErrorMessage as={<Error />} name="password" errors={errors}>
        {message => <p> { message } </p> }
        </ErrorMessage>
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          name="passwordConfirmation"
          type="password"
          className="form-control"
          id="passwordConfirmation"
          ref={register({
            required: "Password confirmation is required",
            minLength: {value: 8, message: "Minimum password confirmation length is 8 characters long"},
            validate: {
              sameAs: sameAs('password', getValues, "Pasword confirmation has to be the same as the password")
            }
          })}
        />
        <ErrorMessage as={<Error />} name="passwordConfirmation" errors={errors}>
        { message =>{return <p> { message } </p> }}
        </ErrorMessage>
      </div>
      <button type="submit" className="btn btn-bwm-main">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
