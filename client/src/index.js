import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'


// this works

// the routing on the frontend have nothing to do with
// routing on the backend
const root = createRoot(document.getElementById("root"));
root.render(<App />);