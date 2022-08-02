
import {  Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import HomePage from "../HomePage/HomePage";

function App() {
  return (
   
    
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    
  );
}

export default App;
