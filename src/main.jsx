import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CreateStudent from "./components/CreateStudent.jsx";
import UpdateStudent from "./components/UpdateStudent.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-student" element={<CreateStudent />} />
      <Route path="/update-student/:id" element={<UpdateStudent />} />
    </Routes>
  </BrowserRouter>
);
