import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/api";
import type { User } from "../type/UserType";

export const sendLoginSignupOtp = createAsyncThunk(
  "auth/sendloginsignupotp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/loginSignupOtp", { email });
      console.log("Login OTP (sendLoginSignupOtp.ts): ", response);
    } catch (error) {
      console.log("Error (authslice/sendLoginSignupOtp): ", error);
    }
  }
);

export const signin = createAsyncThunk<any, any>(
  "auth/signin",
    async (loginRequest: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      console.log("Login OTP (authslice/signin): ", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("Error (authslice/signin): ", error);
    }
  }
);

export const signup = createAsyncThunk<any, any>(
  "auth/signup",
  async (signupRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest);
      console.log("Login OTP (authslice/signup): ", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("Error (Authslice/signup): ", error);
    }
  }
);

export const logout = createAsyncThunk<any, any>(
  "/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("logout success");
      navigate("/");
    } catch (error) {
      console.log("error (AuthSlice/logout)", error);
    }
  }
);

export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
    async ({ jwt }: { jwt: string }, { rejectWithValue }) => {
    try {
      console.log("Using JWT to fetch profile:", jwt);
      const response = await api.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("User Profile (AuthSlice/fetchUserProfile) ", response.data);
      return response.data;
    } catch (error: any) {
      console.log("Error (AuthSlice/fetchUserProfile)", error);
      return rejectWithValue(
        error.response?.data || "Unknown error((AuthSlice/fetchUserProfile))"
      );
    }
  }
);

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginSignupOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });
    builder.addCase(sendLoginSignupOtp.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      // state.jwt = action.payload;
      state.user = action.payload;
      state.isLoggedIn = true;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.jwt = null;
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
