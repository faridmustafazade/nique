import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.data)); // Update localStorage
    },
    removeToWishlist: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.data)); // Update localStorage
    },
    removeAll: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.data)); // Update localStorage
    },
  },
});

export const { addToWishlist, removeToWishlist, removeAll } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
