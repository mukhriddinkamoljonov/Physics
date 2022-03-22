import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="form-container">
      <form>
        <h1 className="form-title">Ro'yxatdan O'tish</h1>
        <input type="text" placeholder="Ismingizni kiriting" /> <br />
        <input type="text" placeholder="Familyangizni kiriting" />
        <br />
        <input type="password" placeholder="Parolingizni kiriting" /> <br />
        <button className="btn-submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
