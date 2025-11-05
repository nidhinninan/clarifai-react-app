import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    navigate("/user-dashboard");
  }

  function signup() {
    alert("Sign up page later");
  }

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <input placeholder="User Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
