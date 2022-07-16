import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ token: "", user: "" });
  const navigate = useNavigate();
  const signup = async (email, password, firstName, lastName) => {
    try {
      console.log(email, password, firstName, lastName);
      const response = await axios
        .post(`/api/auth/signup`, {
          email,
          password,
          firstName,
          lastName,
        })
        .then(function (response) {
          const userData = {
            token: response.data.encodedToken,
            user: response.data.createdUser,
          };
          setUser(userData);
          console.log(userData);
          localStorage.setItem("token", JSON.stringify(userData.token));
          navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
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
    setUser({ token: "", user: "" });
    navigate("/");
  };

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    userToken&&setUser({token:userToken, user:""})
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
