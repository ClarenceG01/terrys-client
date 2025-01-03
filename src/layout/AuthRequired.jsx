//1. we'll have just a variable isAuthenticated, that checks if user is authenticated
// 2. If user is authenticcated, we will return the Outlet
// 3. If user is not authenticated we will redirect the user to login page using the Navigate component
import { Outlet, Navigate } from "react-router-dom";
export default function AuthRequired() {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/user"
      state={{
        message: "You need to login first",
      }}
      replace
    />
  );
}
