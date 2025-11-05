import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    navigate("/admin-dashboard");
  }

  function signup() {
    alert("Sign up page later");
  }

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      <input placeholder="Admin Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Signup</button>
    </div>
  );
}
