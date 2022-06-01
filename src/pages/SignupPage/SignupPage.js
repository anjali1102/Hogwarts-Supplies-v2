import { useState } from "react";
import { Link } from "react-router-dom";
import { signupHandler } from "../../backend/controllers/AuthController";
import { useAuth } from "../../context/auth/AuthContext";
import "./SignupPage.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    signup();
  };

  const { signup } = useAuth();

  return (
    <div className="main-signup">
      <div className="center">
        <h1>Signup</h1>
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
            <label>Password</label>
          </div>
          <button
            className="btn btn-success"
            type="submit"
            value="Register"
            onClick={handleSubmit}
          >
            SignUp
          </button>
          <div className="signup_link">
            Already have a account |
            <Link to="/login">
              <b>Login</b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export { SignupPage };
