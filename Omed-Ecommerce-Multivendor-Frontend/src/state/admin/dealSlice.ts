import { api } from "../../config/api";
import type { ApiResponse, Deal, DealsState } from "../../type/DealType";

import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

// Async thunks
export const createDeal = createAsyncThunk(
  "deals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("created deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);
// export const createDeal = createAsyncThunk<Deal, { deal: Deal; jwt: string }, { rejectValue: string }>(
//   "deals/createDeal",
//   async ({ deal, jwt }, { rejectWithValue }) => {
//     try {
//       const response = await api.post("/admin/deals", deal, {
//         headers: { Authorization: `Bearer ${jwt}` },
//       });
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Failed to create deal");
//     }
//   }
// );

// export const getAllDeals = createAsyncThunk<Deal[], void, { rejectValue: string }>(
//   "deals/getAllDeals",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await api.get("/admin/deals");
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || "Failed to fetch deals");
//     }
//   }
// );

export const getAllDeals = createAsyncThunk(
  "deals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });
      console.log("get all deal", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ", error.response);
      return rejectWithValue(
        error.response?.data?.message || "Failed to create deal"
      );
    }
  }
);

export const updateDeal = createAsyncThunk<Deal, { dealId: number; deal: Deal }, { rejectValue: string }>(
  "deals/updateDeal",
  async ({ dealId, deal }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/admin/deals/${dealId}`, deal);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to update deal");
    }
  }
);

export const deleteDeal = createAsyncThunk<ApiResponse, number, { rejectValue: string }>(
  "deals/deleteDeal",
  async (dealId, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/admin/deals/${dealId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete deal");
    }
  }
);

// Define the initial state
const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};
// // Define the initial state
// const initialState: DealsState = {
//   deals: [],
//   loading: false,
//   error: null,
//   dealCreated: false,
//   dealUpdated: false,
// };


// Create the slice
const dealSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle getAllDeals lifecycle
    builder.addCase(getAllDeals.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllDeals.fulfilled, (state, action: PayloadAction<Deal[]>) => {
      state.loading = false;
      state.deals = action.payload;
    });
    builder.addCase(getAllDeals.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Handle createDeal lifecycle
    builder.addCase(createDeal.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.dealCreated = false;
    });
    builder.addCase(createDeal.fulfilled, (state, action: PayloadAction<Deal>) => {
      state.loading = false;
      state.dealCreated = true;
      state.deals.push(action.payload);
    });
    builder.addCase(createDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.dealCreated = false;
    });

    // Handle updateDeal lifecycle
    builder.addCase(updateDeal.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.dealUpdated = false;
    });
    builder.addCase(updateDeal.fulfilled, (state, action: PayloadAction<Deal>) => {
      state.loading = false;
      state.dealUpdated = true;
      const index = state.deals.findIndex(deal => deal.id === action.payload.id);
      if (index !== -1) {
        state.deals[index] = action.payload;
      }
    });
    builder.addCase(updateDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.dealUpdated = false;
    });

    // Handle deleteDeal lifecycle
    builder.addCase(deleteDeal.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteDeal.fulfilled, (state, action) => {
      state.loading = false;
      state.deals = state.deals.filter(deal => deal.id !== action.meta.arg);
    });
    builder.addCase(deleteDeal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default dealSlice.reducer;

