import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Coupon } from "../../type/CouponType";
import { api } from "../../config/api";

const API_URL = "/api/coupons";
// Async thunks
export const createCoupon = createAsyncThunk<
  Coupon,
  { coupon: any; jwt: string },
  { rejectValue: string }
>("coupon/createCoupon", async ({ coupon, jwt }, { rejectWithValue }) => {
  try {
    const response = await api.post(`${API_URL}/admin/create`, coupon, {
      headers: { Authorization: jwt },
    });
    console.log(" created coupon ", response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to create coupon");
  }
});