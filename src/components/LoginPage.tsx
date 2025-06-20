"use client";
import * as React from "react";
import { BrandHeader } from "./BrandHeader";
import { LoginForm } from "./LoginForm";

interface LoginPageProps {
  onLogin?: (email: string, password: string, rememberMe: boolean) => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onSignUp,
  onForgotPassword,
}) => {
  const handleLogin = (
    email: string,
    password: string,
    rememberMe: boolean,
  ) => {
    console.log("Login attempt:", { email, password: "***", rememberMe });
    onLogin?.(email, password, rememberMe);
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
    onSignUp?.();
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    onForgotPassword?.();
  };

  return (
    <main className="flex flex-col justify-center items-center p-5 min-h-screen bg-white max-md:p-4 max-sm:p-3">
      <BrandHeader />

      <section className="mb-8 text-base text-center text-gray-700 max-md:mb-7 max-md:text-base max-sm:mb-6 max-sm:text-sm">
        <p>Welcome back! Please login to your account.</p>
      </section>

      <LoginForm
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onForgotPassword={handleForgotPassword}
      />
    </main>
  );
};

export default LoginPage;
