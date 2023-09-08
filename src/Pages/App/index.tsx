import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import NewProject from "../PurchaserFlow/NewProject";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="lg:flex flex-row justify-start  xs:hidden ">
        <SideBar />
      </div>
      <Routes>
        {/* Dashboard routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-project" element={<NewProject />} />
        {/* Add more dashboard routes as needed */}

        {/* Signup routes */}
        <Route path="/signup" element={<SignUp />}>
          <Route
            path="create-provider-freelancer"
            element={<CreateAccountProLancer />}
          />
          <Route path="create-password" element={<CreatePassword />} />
          <Route path="verification" element={<VerifyEmail />} />
          {/* Nested LancerProfile route */}
          <Route path="LancerProfile" element={<LancerProfile />} />
          <Route path="forget" element={<Forget />} />
          <Route path="reset" element={<ResetPasswd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
