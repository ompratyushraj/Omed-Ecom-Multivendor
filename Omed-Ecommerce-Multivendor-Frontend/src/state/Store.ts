import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import customerProductSlice from "./customer/customerProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/cartSlice"
import orderSlice from "./customer/orderSlice"
import couponSlice from "./customer/couponSlice"
import wishlistSlice from "./customer/wishlistSlice"
import sellerOrderSlice from "./seller/sellerOrderSlice"
import transactionSlice from "./seller/transactionSlice"
import homeCategorySlice from "./admin/adminSlice"
import customerSlice from "./customer/customerSlice"
import dealSlice from "./admin/dealSlice"


// Combine reducers
const rootReducer = combineReducers({
  seller: sellerSlice,
  sellerProduct: sellerProductSlice,
  customerProduct: customerProductSlice,
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  coupon: couponSlice,
  wishlist: wishlistSlice,
  customer: customerSlice,

  sellerOrder: sellerOrderSlice,
  transaction: transactionSlice,

  admin: homeCategorySlice,
  deal: dealSlice,
});

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

// Typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
