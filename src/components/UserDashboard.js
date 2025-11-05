import React from "react";

export default function UserDashboard() {
  return (
    <div className="dashboard-user">
      <h3>User Query</h3>
      <input placeholder="Query" />
      <textarea placeholder="Response"></textarea>
    </div>
  );
}
