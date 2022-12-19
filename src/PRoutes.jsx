import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Forgot from "./Component/Users/Forgot";
import Login from "./Component/Users/Login";
import Register from "./Component/Users/Register";
import Dashboard from "./Component/dashboard/Dashboard";
import Errors from "./Component/Erros";
import Logout from "./Component/Users/Logout";
import { userContext } from "./App";
export default function PRoutes() {
  const user = useContext(userContext)
  console.log(user?.state?.user?.email)
  return (
    <>
      <BrowserRouter >
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
