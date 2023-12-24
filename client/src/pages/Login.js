import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { LOGIN_USER } from "../queries";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loginUser, { loading, data, error }] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data?.userSignIn?.token);
      navigate("/dashboard");
  }});
  if (loading) return <h1>Loading ...</h1>;
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
    loginUser({
      variables: {
        input: user
      }
    })
  };

  return (
    <div className="container">
      {error && <div className="bg-red-500 text-gray-50">{error.message}</div>}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="emailId"
          type="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
