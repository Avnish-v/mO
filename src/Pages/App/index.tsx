import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import SignUp from "../Signup";
import CreateAccountProLancer from "../Signup/CreateAccountProLancer";
import CreatePassword from "../Signup/CreatePassword";
import VerifyEmail from "../Signup/VerifyEmail";
import LancerProfile from "../Signup/LancerProfile";
import Forget from "../Signup/Forget";
import ResetPasswd from "../Signup/ResetPasswd";
import Navbar from "../Dashboard/Navbar";
import SideBar from "../Dashboard/SideBar";
import Dashboard from "../Dashboard";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row justify-start ">
          <SideBar />
          <BrowserRouter>
            {/* //! sign up Routes */}
            <Routes>
              <Route path="/signup" element={<SignUp />}>
                <Route
                  path="create-provider-freelancer"
                  element={<CreateAccountProLancer />}
                />
                <Route path="create-password" element={<CreatePassword />} />
                <Route path="verification" element={<VerifyEmail />} />
                <Route path="LancerProfile" element={<LancerProfile />} />
                <Route path="forget" element={<Forget />} />
                <Route path="reset" element={<ResetPasswd />} />
              </Route>
            </Routes>
            {/* //!Dashboard routes */}
            <Routes>
              <Route path="/LancerProfile" element={<LancerProfile />} />
              <Route path="/" element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
