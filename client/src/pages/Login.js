import React, { useState } from "react";

function Login() {
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
    }

  return (
    <div className="container">
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
