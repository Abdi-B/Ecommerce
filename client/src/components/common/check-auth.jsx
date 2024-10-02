import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  console.log(isAuthenticated, user.role);

  // If not authenticated and trying to access a protected route
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  // If authenticated and trying to access login or register routes
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("register"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  // If authenticated but the user is not an admin and tries to access admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // Fix for reset-password route, checking if user role is admin or user
  if (
    isAuthenticated &&
    (user?.role === "admin" || user?.role === "user") &&
    location.pathname.includes("/reset-password")
  ) {
    return <Navigate to="/auth/reset-password" />;
  }

  // If an admin tries to access the shop routes, redirect them to the admin dashboard
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;
