import {
  loginFormControls,
  registerFormControls,
  resetPasswordFormControls,
} from "../../config";
import CommonForm from "./form";

// function AuthForm({ action }) {
//     console.log("Form action: ", action); // Check if action is received
//     // Continue with your logic...
//   }

// function AuthForm({ action }) {
//   const handleSubmit = (formData) => {
//     // Handle form submission for different actions
//     if (action === "register") {
//       console.log("Registering user:", formData);
//       // Add API call for registration here
//     } else if (action === "login") {
//       console.log("Logging in user:", formData);
//       // Add API call for login here
//     } else if (action === "resetPassword") {
//       console.log("Resetting password:", formData);
//       // Add API call for password reset here
//     }
//   };

//   //   Determine formControls based on action
//   let formControls;
//   if (action === "register") {
//     formControls = registerFormControls;
//   } else if (action === "login") {
//     formControls = loginFormControls;
//   } else if (action === "resetPassword") {
//     formControls = resetPasswordFormControls;
//   }

//   return (
//     <div className="auth-page">
//       <h1>
//         {action === "register"
//           ? "Create Account"
//           : action === "login"
//           ? "Login"
//           : "Reset Password"}
//       </h1>
//       <CommonForm formControls={formControls} onSubmit={handleSubmit} />
//     </div>
//   );
// }
// export default AuthForm;

import { Link } from "react-router-dom"; // To handle routing

function AuthForm({ action }) {
  const handleSubmit = (formData) => {
    // Handle form submission for different actions
    if (action === "register") {
      console.log("Registering user:", formData);
      // Add API call for registration here
    } else if (action === "login") {
      console.log("Logging in user:", formData);
      // Add API call for login here
    } else if (action === "resetPassword") {
      console.log("Resetting password:", formData);
      // Add API call for password reset here
    }
  };

  // Determine formControls based on action
  let formControls;
  if (action === "register") {
    formControls = registerFormControls;
  } else if (action === "login") {
    formControls = loginFormControls;
  } else if (action === "resetPassword") {
    formControls = resetPasswordFormControls;
  }

  return (
    <div className="auth-page w-2/3">
      <h1>
        {action === "register"
          ? "Create Account"
          : action === "login"
          ? "Log in to your account "
          : "Reset Password"}
      </h1>

      {/* Render the form */}
      <CommonForm formControls={formControls} onSubmit={handleSubmit} />

      {/* Add links based on the current form action */}
      {action === "login" && (
        <div className="links">
          <p>
            Don't have an account?{" "}
            <Link to="/auth/register">Create Account</Link>
          </p>
          <p>
            Forgot your password?{" "}
            <Link to="/auth/resetpassword">Reset Password</Link>
          </p>
        </div>
      )}
      {action === "register" && (
        <div className="links">
          <p>
            Already have an account? <Link to="/auth/login">Login</Link>
          </p>
        </div>
      )}
      {action === "resetPassword" && (
        <div className="links">
          <p>
            Remember your password? <Link to="/auth/login">Login</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
