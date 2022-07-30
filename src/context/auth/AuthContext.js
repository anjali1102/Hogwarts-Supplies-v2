import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

const userData = JSON.parse(localStorage.getItem("userData")) || {
  token: "",
  user: "",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    token: userData?.token,
    user: userData?.user,
  });

  const navigate = useNavigate();
  const location = useLocation();
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
          // console.log(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
          console.log(location);
          navigate(location?.state?.from?.pathname || "/", { replace: true });
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
        localStorage.setItem("userData", JSON.stringify(userData));
        console.log(location);
        navigate(location?.state?.from?.pathname || "/", { replace: true });
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
    localStorage.removeItem("userData");
    setUser({ token: "", user: "" });
    navigate("/");
    // navigate(location?.state?.from?.pathname || "/", { replace: true });
  };

  // useEffect(() => {
  //   const userData = localStorage.getItem("userData");
  //   userData && setUser({ token: userData.token, user: "" });
  // }, []);

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
