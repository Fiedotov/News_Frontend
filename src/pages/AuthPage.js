import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import CommonPageLayout from "../components/Common/CommonPageLayout";

const AuthPage = () => {
  // You need to define the logic for handling login and register
  const handleLogin = (username, password) => {
    console.log("Login", username, password);
    // Implement login logic here
  };

  const handleRegister = (username, email, password) => {
    console.log("Register", username, email, password);
    // Implement registration logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-10">Authentication</h1>
      {/* Switch between LoginForm and RegisterForm based on user action */}
      <LoginForm onLogin={handleLogin} />
      {/* <RegisterForm onRegister={handleRegister} /> */}
    </div>
  );
};

export default AuthPage;
