import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const {
    user: { token },
  } = useAuth();
  console.log(token);
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};
