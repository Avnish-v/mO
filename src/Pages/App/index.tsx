import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignUp from "../Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashbaord"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
