import React from "react";

export default function AdminDashboard() {
  return (
    <div className="dashboard">
      <div className="left-box">
        <h3>Upload Documents</h3>
        <input type="file" />
        <button>Upload</button>
      </div>

      <div className="right-box">
        <h3>Chatbot</h3>
        <input placeholder="Query" />
        <textarea placeholder="Response"></textarea>
      </div>
    </div>
  );
}
