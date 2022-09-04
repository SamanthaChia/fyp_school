import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { backendUrl } from "../../static/js/const";
import { useForm } from "react-hook-form";

const TabOne = ({ display, register }) => {
  const style = display ? { display: "block" } : { display: "none" };
  return (
    <div style={style}>
      <input
        className="sidebar-input border--gray border--onHoverBrown"
        type="text"
        name="first_name"
        placeholder="First Name"
        ref={register({ required: true })}
      />
      <input
        className="sidebar-input border--gray border--onHoverBrown"
        type="text"
        name="last_name"
        placeholder="Last Name"
        ref={register({ required: true })}
      />
      <input
        className="sidebar-input border--gray border--onHoverBrown"
        type="text"
        name="username"
        placeholder="Username"
        ref={register({ required: true })}
      />
      <input
        className="sidebar-input border--gray border--onHoverBrown"
        type="email"
        name="email"
        placeholder="Email"
        ref={register({ required: true })}
      />
      <input
        className="sidebar-input border--gray border--onHoverBrown"
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
    </div>
  );
};

const RegisterForm = ({ setErrMsgs }) => {
  const { register, handleSubmit, watch } = useForm();
  const firstName = watch("first_name", "");
  const lastName = watch("last_name", "");
  const username = watch("username", "");
  const email = watch("email", "");
  const passw = watch("password", "");
  const history = useHistory();

  const onSubmit = async (data) => {
    const url = `${backendUrl}/register/`;
    try {
      await axios.post(url, data);
      history.push("/login");
    } catch (err) {
      if (err.response?.status === 400) {
        setErrMsgs({ signup: true, err: true, msgs: err.response.data });
      } else {
        setErrMsgs({ signup: false, err: true, msgs: { Connection: 'Refused', Server: 'Down' } });
      }
    }
  };

  const validTabContent = () => {
    return [firstName, lastName, username, passw, email]
      .map((x) => x.trim() !== "")
      .reduce((a, b) => a && b, true);
  };

  const getClass = () => {
    let str = "btn";
    if (!validTabContent()) {
      str += " btn--disabled";
    }
    return str;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-fieldset">
          <TabOne display={true} register={register} />
          <div className="buttons">
            <button
              id="signup"
              className={getClass()}
              disabled={!validTabContent()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
