import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
