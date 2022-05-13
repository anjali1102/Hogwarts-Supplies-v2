import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";

const LoginPage = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("sanskarPassword").replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Email Address</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <label>
            Password <i className="fa fa-eye-slash icon"></i>
          </label>
        </div>
        <Link to="forgot">
          <div className="pass">Forgot Password?</div>
        </Link>
        <div className="checkbox_container">
          <label className="checkbox">
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          id="login"
          onClick={loginHandler}
        >
          LOGIN
        </button>
        <div className="signup_link">
          Create Your Account |{" "}
          <Link to="signup">
            <b>Signup</b>
          </Link>
        </div>
        {/* {flag && (
          <Alert color="primary" variant="danger">
            Please Fill Every Field
          </Alert>
        )} */}
      </form>
    </div>
  );
};

export { LoginPage };
