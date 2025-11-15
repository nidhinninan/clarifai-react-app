import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import './index.css';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports'; // You will uncomment this later
// Amplify.configure(awsExports); // You will uncomment this later

import awsConfig from './amplifyconfiguration.json';
Amplify.configure(awsConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // The Router is now inside App.js, so we don't need it here.
  <App />
);
