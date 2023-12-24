import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="container">
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
