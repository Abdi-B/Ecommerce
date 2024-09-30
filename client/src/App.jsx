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
import ShoppingAccount from './pages/shopping-view/account';
import ShoppingListing from './pages/shopping-view/listing';
import ShoppingHome from './pages/shopping-view/home';
import ShoppingCheckout from './pages/shopping-view/checkout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>Ecommerce</h2> */}
      <div className="flex flex-col overflow-hidden bg-white">
        {/* <h1>Header Component</h1> */}

        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />}></Route>
            <Route path="register" element={<AuthRegister />}></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="products" element={<AdminProducts />}></Route>
            <Route path="features" element={<AdminFeatures />}></Route>
            <Route path="orders" element={<AdminOrders />}></Route>
          </Route>
          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="checkout" element={<ShoppingCheckout/>} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
