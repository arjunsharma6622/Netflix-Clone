import Home from "./pages/Home/Home"
import "./app.scss"
import Watch from "./pages/Watch/Watch";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext"


function App() {
  const user = false
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={!user ? <Navigate to={"/register"} /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"} />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to={"/"} />} />

        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}


      </Routes>
    </BrowserRouter>

  );
}

export default App;
