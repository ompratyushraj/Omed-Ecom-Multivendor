import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";


export const sendLoginSignupOtp = createAsyncThunk("auth/sendloginsignupotp", 
    async({email}:{email:string}, {rejectWithValue}) => {
        try{
            const response = await api.post("/auth/sent/loginSignupOtp", {email});
            console.log("Login OTP (sendLoginSignupOtp.ts): ", response);
        }catch(error){
            console.log("Error (sendLoginSignupOtp.ts): ", error);
        }
    }
)


export const signin = createAsyncThunk<any, any>("auth/signin", 
    async(loginRequest:{email:string}, {rejectWithValue}) => {
        try{
            const response = await api.post("/auth/signin", loginRequest);
            console.log("Login OTP (signin): ", response.data);
        }catch(error){
            console.log("Error (signin): ", error);
        }
    }
)

export const logout=createAsyncThunk<any,any>("/auth/logout",
  async(navigate, {rejectWithValue})=>{
    try {
      localStorage.clear()
      console.log("logout success")
      navigate("/")
    } catch (error) {
      console.log("error - -", error);
    }
  }
)