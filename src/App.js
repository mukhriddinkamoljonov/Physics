import "./App.css";
import Login from "./Components/Login/login";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navbar to="/" />} />
      </Routes>
    </>
  );
}

export default App;
