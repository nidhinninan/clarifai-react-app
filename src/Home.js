import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>ClarifAI</h1>
      <h2>Hello</h2>

      <div className="button-group">
        <Link to="/admin-login"><button>Admin</button></Link>
        <Link to="/user-login"><button>User</button></Link>
      </div>
    </div>
  );
}
