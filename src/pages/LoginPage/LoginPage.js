import { useState, useContext } from "react";
import "./LoginPage.css";
import { Link, Navigate } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { useAuth } from "../../context/auth/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const notify3 = () => toast.success("Successfully Login !!");

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  const { login } = useAuth();

  const loginWithGuest = (e) => {
    e.preventDefault();
    login("anjaliChauhan@gmail.com", "anjali");
    notify3();
  };

  return (
    <div className="main-login">
      <div className="center">
        <h1>Login</h1>
        <form> 
          <div className="txt_field">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <span></span>
            <label>Email Address</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="fa fa-eye-slash icon"
              required
            />
            <label>Password</label>
          </div>
          <button className="btn btn-success" type="submit">Submit</button>
          <button className="btn btn-success" onClick={loginWithGuest}>
            GUEST LOGIN
          </button>
          <div className="signup_link">
            Create Your Account |{" "}
            <Link to="/signup">
              <b>Signup</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { LoginPage };
