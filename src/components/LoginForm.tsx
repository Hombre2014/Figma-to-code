"use client";
import * as React from "react";
import { FormInput } from "./FormInput";

interface LoginFormProps {
  onLogin?: (email: string, password: string, rememberMe: boolean) => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onSignUp,
  onForgotPassword,
  className = "",
}) => {
  const [email, setEmail] = React.useState("Jules.McConnell@localhappinez.com");
  const [password, setPassword] = React.useState("••••••••••••••");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.(email, password, rememberMe);
  };

  const handleSignUp = () => {
    onSignUp?.();
  };

  const handleForgotPassword = () => {
    onForgotPassword?.();
  };

  return (
    <form
      onSubmit={handleLogin}
      className={`flex flex-col gap-6 w-full max-w-[400px] max-md:gap-5 max-md:max-w-[380px] max-sm:gap-4 max-sm:max-w-full ${className}`}
    >
      <FormInput
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        required
      />

      <FormInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        required
      />

      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border border-gray-300 border-solid accent-blue-500"
          />
          <label
            htmlFor="remember"
            className="text-sm text-gray-700 cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-blue-500 no-underline cursor-pointer hover:underline focus:underline focus:outline-none"
        >
          Forgot Password
        </button>
      </div>

      <div className="flex gap-4 max-sm:flex-col">
        <button
          type="submit"
          className="flex-1 px-6 py-3 text-sm font-medium text-white bg-gray-600 rounded-md cursor-pointer border-[none] duration-[0.2s] ease-[ease] transition-[background-color] hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 max-sm:w-full"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleSignUp}
          className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 bg-transparent rounded-md border border-gray-300 border-solid transition-all cursor-pointer duration-[0.2s] ease-[ease] hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 max-sm:w-full"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
