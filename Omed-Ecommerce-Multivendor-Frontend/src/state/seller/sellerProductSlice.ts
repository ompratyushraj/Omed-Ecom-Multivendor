import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../type/ProductType";
import { api } from "../../config/api";

export const fetchSellerProduct = createAsyncThunk<Product[], any>(
  "/sellerProduct/fetchSellerProduct",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      console.log("Seller Products (sellerProductSlice/fetchSellerProduct): ", data);
      return data;
    } catch (error) {
      console.log("Error :", error);
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk<
  Product,
  { request: any; jwt: string | null },
  { rejectValue: any }
>(
  "/sellerProduct/createProduct",
  async (args, { rejectWithValue }) => {
    const { request, jwt } = args;
    try {
      const response = await api.post('/sellers/products', request, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Seller Product Created (sellerProductSlice/createProduct): ", response.data);
      return response.data;
    } catch (error: any) {
      console.error("Error:", error);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSellerProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchSellerProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchSellerProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });

    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default sellerProductSlice.reducer;
