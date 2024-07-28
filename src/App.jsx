import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
import { AuthContextprovider } from "./Context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

export default function App() {
  return (
    <AuthContextprovider>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Signup" element={<SignUp />}></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </>
      </BrowserRouter>
    </AuthContextprovider>
  );
}
