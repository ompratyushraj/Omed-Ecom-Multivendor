import React, { useState } from "react";
import CustomerLoginForm from "../../components/auth/CustomerLoginForm";
import CustomerRegisterForm from "../../components/auth/CustomerRegisterForm";
import { Button } from "@mui/material";

const CustomerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center m-9 h-[100%] items-center">
      <div className="max-w-md h-[100%] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          src="https://images.unsplash.com/vector-1755153037691-159e450ba0f9?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="mt-8 px-10">
          {isLogin ? <CustomerLoginForm /> : <CustomerRegisterForm />}

          <div className="flex items-center gap-1 justify-center mt-5 pb-10">
            <p>{isLogin && "Don't "} have Account</p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAuth;
