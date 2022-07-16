import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useAuth } from "../../context/index";
import toast from "react-hot-toast";

const notifyLogin = () => toast.success("Successfully Login !!");

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const { login } = useAuth();

  const loginWithGuest = (e) => {
    e.preventDefault();
    login("anjaliChauhan@gmail.com", "anjali");
    notifyLogin();
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
          <button className="btn btn-success" type="submit">
            Login
          </button>
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
