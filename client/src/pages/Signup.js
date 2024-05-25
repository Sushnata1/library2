import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../queries";
export default function Signup() {
  const [user, setUser] = useState({});
  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);
  if (loading) {
    return <h1>Loading . . .</h1> ;
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({ variables: { input: { ...user, type: "admin" } } });
  };
  return (
    <div className="container">
      {error && <div className="bg-red-500 text-gray-50">{error.message}</div>}
      {data && (
        <div className="bg-green-500 text-gray-50">{data?.userSignUp}</div>
      )}
      <h2>Signup!!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="email"
          name="emailId"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <Link to="/login">
          <p>Already have an account ?</p>
        </Link>
        <button className="bg-green-500" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
