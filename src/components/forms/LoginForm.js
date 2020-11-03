import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import Error from 'components/shared/FormError';

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  //eslint-disable-next-line
  const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register({ 
            required: "Email is required", 
            pattern: {value: EMAIL_PATTERN, message: "Invalid e-mail format"}
          })}
          name="email"
          type="email"
          className="form-control"
          id="email"
        />
        <ErrorMessage as={<Error />} name="email" errors={errors}>
          {(message) => <p>{ message }</p>}
        </ErrorMessage>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={register({ 
            required: "Password is required", 
            minLength: {value: 8, message: "Minimum password length is 8 cahracters long"}
          })}
          name="password"
          type="password"
          className="form-control"
          id="password"
        />
        <ErrorMessage as={<Error />} name="password" errors={errors}>
          {(message) => <p>{ message }</p>}
        </ErrorMessage>
      </div>
      <button type="submit" className="btn btn-bwm-main">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
