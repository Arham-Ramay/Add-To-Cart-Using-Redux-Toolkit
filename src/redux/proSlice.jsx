import { createSlice } from "@reduxjs/toolkit";

const proSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Add the selected item to the cart
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Remove an item from the cart based on some identifier (e.g., id)
      const itemIdToRemove = action.payload;
      return state.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = proSlice.actions;
export default proSlice.reducer;