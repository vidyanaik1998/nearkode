import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';
import ResetPassword from './component/ResetPassword';
import Dashboard from './component/Dashboard/Dashboard';
;

function App() {
  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />

        {/* <Route path="/add" element={<AddProfile />}>
        </Route>
        <Route path='/find/:id/:id' element={<FindRelation />} /> */}
      </Routes>
    </BrowserRouter></>
  );
}

export default App;

