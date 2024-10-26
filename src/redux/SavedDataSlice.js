import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  saveData: [],
};
export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    DataSavedSuccess: (state, action) => {
      state.saveData = [...state.saveData, action.payload];
    },
    DeleteSavedDataSuccess: (state, action) => {
     const filterData=state.saveData.filter((i)=>i.id!==action.payload)
     state.saveData=filterData
    },
  },
});

export const {DataSavedSuccess,DeleteSavedDataSuccess} = savedSlice.actions;

export default savedSlice.reducer;
