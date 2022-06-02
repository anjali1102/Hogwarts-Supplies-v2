import { createContext } from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState();
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
        setUser(response.data.foundUser);
        setUser(response.data.encodedToken);

        navigate("/");
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const logout = () => {
    setUser(null);
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
