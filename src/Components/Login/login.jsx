import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [wait, setWait] = useState(!false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWait(true);
    console.log("submit");
  };

  return (
    <div className="form-container" disabled>
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Ro'yxatdan O'tish</h1>
        <input type="text" placeholder="Ismingizni kiriting" /> <br />
        <input type="text" placeholder="Familyangizni kiriting" />
        <br />
        <input type="password" placeholder="Parolingizni kiriting" /> <br />
        <button className="btn-submit" htmlType="submit" disabled={wait}>
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
