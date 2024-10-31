import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  function SignIn() {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const userProfile = JSON.parse(savedProfile);
      if (email == userProfile.email && password == userProfile.password) {
        console.log("email i password postoje, uspjesno ste se logirali");
        navigate("/welcome");
      } else {
        alert("email ili password nisu isti");
      }
    }
  }
  useEffect(() => {}, [email]);

  return (
    <div className="login">
      <p>Login</p>
      <form onSubmit={SignIn}>
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
