import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Successfully added", {
        position: "top-right",
        autoClose: 5000,
      });
    },
    removeToWishlist: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.data)); // Update localStorage
      toast.error("Successfully removed", {
        position: "top-right",
        autoClose: 5000,
      });
    },
    removeAll: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.data)); // Update localStorage
      toast.error("Successfully removed all", {
        position: "top-right",
        autoClose: 5000,
      });
    },
  },
});

export const { addToWishlist, removeToWishlist, removeAll } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
