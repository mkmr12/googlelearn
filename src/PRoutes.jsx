import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Forgot from "./Component/Users/Forgot";
import Login from "./Component/Users/Login";
import Register from "./Component/Users/Register";
import Dashboard from "./Component/dashboard/Dashboard";

export default function PRoutes() {
  const it= localStorage.getItem('user')
  
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
          <Route path="/forgot-password" element={<Forgot />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path={"/dashboard"} element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
