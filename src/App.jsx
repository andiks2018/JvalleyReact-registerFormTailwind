import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
