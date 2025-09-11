import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbarr from "./components/Navbarr";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getservice } from "./JS/serviceSlice";
function App() {
  const [ping, setping] = useState(false)
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getservice())
  }, [ping]);
  return (
    <div className="App">
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home ping={ping} setping={setping} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
