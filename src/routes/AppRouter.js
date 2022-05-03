import React from "react";
import UserSignInScreen from "../pages/UserSignInScreen";
import UserSignUpScreen from "../pages/UserSignUpScreen";
import Dashboard from "../pages/Dashboard";
import Analysis from "../pages/CovidAnalysis";
import Cough from "../pages/Cough";
import Temperature from "../pages/Temperature";
import OxygenSaturationLevel from "../pages/OxygenSaturationLevel";
import RespirationRate from "../pages/RespirationRate";
import HeartRate from "../pages/HeartRate";
import { Routes, Route } from "react-router-dom";
import ForgetPasswordScreen from "../pages/ForgetPasswordScreen";
import RestPasswordScreen from "../pages/RestPasswordScreen";
import UserProfileScreen from "./../pages/UserProfileScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<UserSignInScreen />}></Route>
      <Route exact path="/signup" element={<UserSignUpScreen />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/analysis" element={<Analysis />}></Route>
      <Route exact path="/cough" element={<Cough />}></Route>
      <Route exact path="/fever" element={<Temperature />}></Route>
      <Route exact path="/spo2" element={<OxygenSaturationLevel />}></Route>
      <Route exact path="/respiration" element={<RespirationRate />}></Route>
      <Route exact path="/heart" element={<HeartRate />}></Route>
      <Route
        exact
        path="/forgetpassword"
        element={<ForgetPasswordScreen />}
      ></Route>
      <Route
        exact
        path="/resetpassword"
        element={<RestPasswordScreen />}
      ></Route>
      <Route path="/profile" element={<UserProfileScreen />}></Route>
    </Routes>
  );
};

export default AppRouter;
