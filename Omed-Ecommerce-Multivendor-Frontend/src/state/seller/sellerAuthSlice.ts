import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";

// Should be named as sellerSlice.ts


export const sellerLogin = createAsyncThunk<any, any>("auth/signin", 
    async(loginRequest:{email:string}, {rejectWithValue}) => {
        try{
            const response = await api.post("/sellers/login", loginRequest);
            console.log("Login OTP (signin): ", response.data);
            const jwt = response.data.jwt;
            localStorage.setItem("jwt", jwt);
        }catch(error){
            console.log("Error (signin): ", error);
        }
    }
)