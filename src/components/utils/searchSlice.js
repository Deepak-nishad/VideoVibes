import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResuts: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResuts } = searchSlice.actions;
export default searchSlice.reducer;
