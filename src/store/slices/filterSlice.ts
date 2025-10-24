import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '@/types/product';

const initialState: FilterState = {
  priceRange: { min: 0, max: 10000000 },
  selectedBrands: [],
  selectedRating: 0,
  selectedCategory: '',
  studyDuration: { min: 0, max: 100 },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterState: (state, action: PayloadAction<FilterState>) => {
      return { ...state, ...action.payload };
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
    },
    setSelectedBrands: (state, action: PayloadAction<string[]>) => {
      state.selectedBrands = action.payload;
    },
    setSelectedRating: (state, action: PayloadAction<number>) => {
      state.selectedRating = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setStudyDuration: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.studyDuration = action.payload;
    },
    clearAllFilters: (state) => {
      return initialState;
    },
    addBrand: (state, action: PayloadAction<string>) => {
      if (!state.selectedBrands.includes(action.payload)) {
        state.selectedBrands.push(action.payload);
      }
    },
    removeBrand: (state, action: PayloadAction<string>) => {
      state.selectedBrands = state.selectedBrands.filter(brand => brand !== action.payload);
    },
  },
});

export const {
  setFilterState,
  setPriceRange,
  setSelectedBrands,
  setSelectedRating,
  setSelectedCategory,
  setStudyDuration,
  clearAllFilters,
  addBrand,
  removeBrand,
} = filterSlice.actions;

export default filterSlice.reducer;