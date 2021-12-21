import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const ProtectedRoute = () => {
  const [state] = useContext(UserContext);

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return state.user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
