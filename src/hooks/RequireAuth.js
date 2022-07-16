import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

export const RequireAuth = ({ children }) => {
  const {
    user: { token },
  } = useAuth();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
