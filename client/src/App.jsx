import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminFeatures from "./pages/admin-view/features";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found/index";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import AuthForm from "./components/common/formAuth";

function App() {
  // const [count, setCount] = useState(0);

  const isAuthenticated = true;
  const user = {
    name: "Abdi",
    role: "admin",
  };

  return (
    <>
      {/* <h2>Ecommerce</h2> */}
      <div className="flex flex-col overflow-hidden bg-white">
        {/* <h1>Header Component</h1> */}

        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            {/* <Route path="login" element={<AuthLogin />}></Route>
            <Route path="register" element={<AuthRegister />}></Route> */}
            <Route path="login" element={<AuthForm action="login" />}></Route>
            <Route
              path="register"
              element={<AuthForm action="register" />}
            ></Route>
            <Route
              path="reset-password"
              element={<AuthForm action="resetPassword" />}
            ></Route>
          </Route>
          {/* Define reset-password as an independent route */}
          {/* <Route path="/reset-password" element={<AuthForm action="resetPassword" />} /> */}

            {/* Admin routes */}

          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="features" element={<AdminFeatures />}></Route>
            <Route path="orders" element={<AdminOrders />}></Route>
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
          </Route>

          <Route path="/unauth-page" element={<UnauthPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
