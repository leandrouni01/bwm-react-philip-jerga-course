import React from "react";
import { useForm } from 'react-hook-form'; 

const RegisterForm = ({onSubmit}) => {

  const { handleSubmit, register, errors } = useForm();

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
        ref={register({required: true})}/>
        {
          errors.username && (
            <div className="alert alert-danger">
              {errors.username.type === "required" && <span>Username is required</span>}
            </div>
          )
        }
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
        name="email"
        type="email" 
        className="form-control" 
        id="email"
        ref={register({required: true, pattern: EMAIL_PATTERN})} />
        {
          errors.email && (
            <div className="alert alert-danger">
              {errors.email.type === "required" && <span>Email is required</span>}
              {errors.email.type === "pattern" && <span>Invalid email format</span>}
            </div>
          )
        }
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
        name="password" 
        type="password" 
        className="form-control" 
        id="password" 
        ref={register({required:true, minLength: 8})}/>
        {
          errors.password && (
            <div className="alert alert-danger">
              {errors.password.type === "required" && <span>Password is required</span>}
              {errors.password.type === "minLength" && <span>Minimum password length is 8 characters long</span>}
            </div>
          )
        }
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          name="passwordConfirmation"
          type="password"
          className="form-control"
          id="passwordConfirmation"
          ref={register({required: true, minLength: 8})}
        />
        {
          errors.passwordConfirmation && (
            <div className="alert alert-danger">
              {errors.passwordConfirmation.type === "required" && <span>Password is required</span>}
              {errors.passwordConfirmation.type === "minLength" && <span>Minimum password length is 8 characters long</span>}
            </div>
          )
        }
      </div>
      <button type="submit" className="btn btn-bwm-main">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
