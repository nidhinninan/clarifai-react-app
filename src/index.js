import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports'; // You will uncomment this later
// Amplify.configure(awsExports); // You will uncomment this later

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
