import { createSlice } from "@reduxjs/toolkit";
import { Category } from "./categories.types";

export type CategoriesState = {
  readonly categories: Category[];
};

const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
