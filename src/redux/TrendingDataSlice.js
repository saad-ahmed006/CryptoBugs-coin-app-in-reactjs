import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  TrendingCoindata: [],
  error: null,
};

export const trendingSlice = createSlice({
  name: "tending",
  initialState,
  reducers: {
    TrendingDataInit: (state) => {
      state.loading = true;
    },
    TrendingDataSuccess: (state, action) => {
      state.loading = false;
      state.TrendingCoindata = action.payload;
    },
    TrendingDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  
  },
});

export const {
    TrendingDataInit,
    TrendingDataSuccess,
    TrendingDataFail,
} = trendingSlice.actions;

export default trendingSlice.reducer;
