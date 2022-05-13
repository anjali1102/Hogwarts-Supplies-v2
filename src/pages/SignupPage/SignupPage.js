import { useState } from "react";
import { Link } from "react-router-dom";
// import { Login } from "../LoginPage/LoginPage";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  // const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.prevent.default();
    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email ", JSON.stringify(email));
      localStorage.setItem("password ", JSON.stringify(password));

      console.log("saved in local storage");
      setLogin(!login);
    }
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label>Enter your Full Name</label>
        </div>
        <div className="txt_field">
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label>Email Address</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <label>
            Password<i className="fa fa-eye-slash icon"></i>
          </label>
        </div>
        <button type="submit" value="Register" onClick={handleSubmit}>
          SignUp
        </button>
        <div className="signup_link">
          Already have a account |
          <Link to="login">
            <b>Login</b>
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
export { SignupPage };
