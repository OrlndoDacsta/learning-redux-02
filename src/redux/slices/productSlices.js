import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const fecthProduct = createAsyncThunk("product/fetchProduct", async () => {
  const res = await axios("https://fakestoreapi.com/products");
  const data = await res.data;
  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fecthProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fecthProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fecthProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;