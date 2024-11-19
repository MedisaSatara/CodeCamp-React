import { profile } from "console";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const Login: FC = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  function SignIn() {
    const savedProfile = localStorage.getItem("userProfiles");
    if (savedProfile) {
      const userProfile = JSON.parse(savedProfile);
      const user = userProfile.find(
        (profile: { email: String; password: String }) =>
          profile.email === email && profile.password === password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("email i password postoje, uspjesno ste se logirali");
        navigate("/welcome");
      } else {
        alert("email ili password nisu isti");
      }
    }
  }
  useEffect(() => {}, [email]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged successufully");
      navigate("/welcome");
    } catch (error) {
      console.error("Error logged in", error);
    }
  };

  return (
    <div className="login-page">
      <p>Login</p>
      <form onSubmit={handleLogin} className="loginForm">
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
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
