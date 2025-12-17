import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import customerProductSlice from "./user/customerProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./user/cartSlice"
import orderSlice from "./user/orderSlice"
import couponSlice from "./user/couponSlice"
import wishlistSlice from "./user/wishlistSlice"
import sellerOrderSlice from "./seller/sellerOrderSlice"
import transactionSlice from "./transactionSlice"
import homeCategorySlice from "./admin/adminSlice"
import customerSlice from "./customerSlice"
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
