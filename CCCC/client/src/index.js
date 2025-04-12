import React from "react";
import ReactDOM from "react-dom/client"; // Updated version of ReactDOM for React 18+
import App from "./App";
import "./index.css"; // Global styles

// Create a root for React to mount on
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component to the root element
root.render(<App />);
