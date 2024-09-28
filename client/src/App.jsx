import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthLayout from "./components/auth/layout";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h2>Ecommerce</h2> */}
      <div className="flex flex-col overflow-hidden bg-white">
        <h1>Header Component</h1>

        <Routes>
          <Route path="/auth" element={<AuthLayout />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
