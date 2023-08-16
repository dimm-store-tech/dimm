import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Login from "./pages/Login";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/attendance" element={<h1>Attendance</h1>} />
        <Route path="/clients" element={<h1>Clients</h1>} />
        <Route path="/employees" element={<h1>Employees</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/*" element={<h1>Not Found</h1>} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
