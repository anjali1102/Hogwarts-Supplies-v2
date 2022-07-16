import axios from "axios";
import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const userToken = localStorage.getItem("token");

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: userToken, user: "" });
  const navigate = useNavigate();
  const signup = () => {
    setUser("anjali");
  };
  const login = (email, password) => {
    axios
      .post("/api/auth/login", {
        email,
        password,
      })
      .then(function (response) {
        const userData = {
          token: response.data.encodedToken,
          user: response.data.foundUser,
        };

        setUser(userData);
        localStorage.setItem("token", JSON.stringify(userData.token));
        navigate("/");
      })
      .catch(function (error) {
        const { status } = error.response;
        if (status === 401) {
          toast.error("Wrong Credentials. Please Try again");
        } else if (status === 404) {
          toast.error("User not found.Create new account");
        }
      });
  };
  const logout = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
